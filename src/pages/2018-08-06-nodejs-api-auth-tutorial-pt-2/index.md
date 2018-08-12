---
title: "Node.js API Authentication Tutorial Part 2: Sessions and Tokens"
date: "2018-08-10T04:46:38+00:00" 
path: "/nodejs-api-authentication-tutorial-pt-2/"
---

We're back with the Node.js Authentication tutorial! In [part 1](), I gave a high-level explanation of how our authentication would work and we created a model for how our users will be stored in mongodb and the endpoints to handle user registration and login. In this part of the tutorial, we will cover sign on sessions/tokens and protected routes. With that being said, let's pick back up right where we left off!

> _This is part 2 of a tutorial series. Go back to read [part 1]() if you want to catch up!_

## Overview of Sessions and Token Logic

As we explained in part 1 of this tutorial, we are going to be implementing (stateful) sign-on sessions for our user authentication. In a nutshell, a session will be initialized and stored in our database after every time a user logs in with valid credentials along with the userId of the user who logged in. Each session will have a token generated to identify it, this token will then be sent along as a cookie with each subsequent request to the server and response from the server, this way users will not have to provide their credentials every time they want to access a private/protected route.

## Creating the Session Mongoose Model

In part 1 we created the file for our session model and left it empty. We're gonna start out by creating the model for our sessions. To begin, let's import the mongoose package into our module. Our model will have keys for a token to identify the session, a timestamp for when the session is initialized, the userId of the user that signed in (this would be the equivalent of a foreign key in a relational database), and the status of the session which can be set to either valid or expired.

Let's open up `models/session.js` and translate all of this into code:

```js
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const crypto = require('crypto');

const SessionSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  status: {
    type: String,
    enum: ['valid', 'expired'],
    default: 'valid',
  },
});
```

Pretty straightforward. Now let's figure out how we will generate the tokens!

### Generating Tokens to Identify User Sessions

We need to generate a unique token for every session. This is the token that will be sent as a cookie on each request and identify the session in our database, and in turn identify the user as well. We're going to keep it simple and use _hexified_ 16+ random bytes generated with Node.js's [crypto module]() as our tokens. This is a very easy implementation that does not require us to to make any security sacrifices or compromises, so it's a win-win! Let's create a new static method in our `session.js` module using the `randomBytes()` API from the crypto module, we'll name it `generateToken()`. We're going to promisify the call to `randomBytes()` so we can use async/await when using our `generateToken()` method.

Let's write this method in our `session.js` file:

```js
SessionSchema.statics.generateToken = function() {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(16, (err, buf) => {
      if (err) {
        reject(err);
      }
      const token = buf.toString('hex');
      resolve(token);
    });
  });
};
```

While we're at it, let's create an instance method to expire sessions. This is going to be very straightforward, all the method has to do is set its own status to expired using mongoose's update API. Because this is an instance method (the method is going to be invoked from a specific session instance), we don't need the ID of the session we want to expire. That should be all we need for our session model, so let's export the module in the end.

Append our new function to `session.js`:

```js
SessionSchema.methods.expireToken = function() {
  const session = this;
  return session.update({ $set: { status: 'expired' } });
};

module.exports = mongoose.model('Session', SessionSchema);
```

Awesome! We just finished the logic for our sessions and tokens. All we have to do now is use it in our API! Let's make some changes to the login/register routes we created in part 1.

## Implementing Sign On Sessions In Our Routes

We're going to be creating a new session in our database after every successful user login and registration. We will be using the methods we wrote in our `session.js` module to create a unique token per session. Once we initialize a new session, we'll set a new cookie with our new token from the server to be passed on between the client and server in future requests. Sending the token per se won't accomplish anything—we are going to create a new middleware function to check that the client has sent a valid token in the request, and we'll then use the middleware function in every protected route (a route that requires the user to be authenticated in order to access). Let's get to it!

### Updating Our `api/users/login` and `api/users/register` route handlers

We'll start off by changing the logic in our `users.js` route a tad. Begin with importing our new `session.js` module at the top, we'll be needing it for our session logic. Let's then create a **new function** for initializing a new session, we'll use this function in both our register and login routes whenever a user successfully logins. First we'll generate a token using the static method we created earlier, `Session.generateToken()`. We'll then use the token returned from the function along with the userId that just logged in to create a new session and save it to our database.

Let's write this up at the top of our `routes/users.js`, after our imports:

```js
const Session = require('../models/session');

const initSession = async (userId) => {
  const token = await Session.generateToken();
  const session = new Session({ token, userId });
  await session.save();
  return session;
};
```

Awesome! Now we have our function to initialize a session, so we'll add calls to the function after every successful user login/registration. Now all that's left to do is **set a cookie** with the token of the session that was just created (cookies are just key, value pairs sent as headers of the request/response, BTW)! Express.js makes it very simple to set a new cookie in our response, all we have to do is use

```js
res.cookie('nameForCookie', cookieValue, { options });
```

We'll call our cookie 'token'. Here's a list of the flags/options we will be using for our token cookie:

- **httpOnly**: Makes our cookie only accesibly by the server (AKA cookie can't be accessed using JavaScript on the client, XSS mitigation)
- **sameSite**: Prevents browser from sending cookie along with cross-site requests (CSRF mitigation, but we'll cover CSRF in more detail in part 3)
- **maxAge**: Option for expiring the cookie after a given amount of time (relative to current time)
- **secure**: Sets cookie to be used only with HTTPS (set this to true when in production)

Refer to the [Express.js docs](https://expressjs.com/en/4x/api.html#res.cookie) for the list of cookie flags/options.

In our `api/users/register` route:

```js
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!isEmail(email)) {
      throw new Error('Email must be a valid email address.');
    }
    if (typeof password !== 'string') {
      throw new Error('Password must be a string.');
    }
    const user = new User({ email, password });
    const persistedUser = await user.save();
    // we'll use the ID of the new user for our new session
    const userId = persistedUser._id;

    const session = await initSession(userId);

    res
      .cookie('token', session.token, {
        httpOnly: true,
        sameSite: true,
        maxAge: 1209600000, // 2 weeks
        secure: process.env.NODE_ENV === 'production', // only set to true in production so we don't have to bother setting up HTTPS in dev mode
      })
      .status(201)
      .json({
        title: 'User Registration Successful',
        detail: 'Successfully registered new user',
      });
  } catch (err) {
    //error handling here
  }
```

And in our `api/users/login` route:

```js
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!isEmail(email)) {
      return res.status(400).json({
        errors: [
          {
            title: 'Bad Request',
            detail: 'Email must be a valid email address',
          },
        ],
      });
    }
    if (typeof password !== 'string') {
      return res.status(400).json({
        errors: [
          {
            title: 'Bad Request',
            detail: 'Password must be a string',
          },
        ],
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error();
    }
    // use the ID of the user who logged in for the session
    const userId = user._id;

    const passwordValidated = await bcrypt.compare(password, user.password);
    if (!passwordValidated) {
      throw new Error();
    }
    // initialize our session
    const session = await initSession(userId);

    // same options as before!
    res
      .cookie('token', session.token, {
        httpOnly: true,
        sameSite: true,
        maxAge: 1209600000,
        secure: process.env.NODE_ENV === 'production',
      })
      .json({
        title: 'Login Successful',
        detail: 'Successfully validated user credentials',
      });
  } catch (err) {
    // error handling here
  }
```

There it is! We just finished one of the bigger parts of our project! Let's test our updates with Postman and verify our sessions are being initialized and our token cookies are being sent and received!

### Testing Our Changes
