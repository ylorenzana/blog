import React from 'react';
import Link from 'gatsby-link';
import { css } from 'emotion';

import { mq } from '../layouts/cssConstants';
import Header from '../components/Header';
import Footer from '../components/Footer';
import resume from '../assets/Lorenzana-Resume-V3.pdf';

const wrapper = css({
  minHeight: '100vh',
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  gridTemplateRows: 'minmax(28vh, auto) auto minmax(10vh, auto)',
  gridGap: '2rem 1rem',
  placeItems: 'center',
  margin: '0',
});

const aboutSection = css(mq({ gridColumn: ['2 / -2', '2 / -2', '3 / -3'] }), {
  display: 'grid',
  // gridColumn: '3 / -3',
  // justifyItems: 'center',
  gridGap: '1rem 0',
  padding: '1rem',
  lineHeight: '2',
  h2: {
    margin: 0,
  },
});

const aboutParagraph = css({
  margin: 0,
});

const About = () => (
  <div className="content-wrapper">
    <Header />
    <section className={aboutSection}>
      <article className={aboutParagraph}>
        <h2>About me</h2>
        <p>
          Yo! I'm Yang Lorenzana. I'm a software developer who loves all things
          JavaScript. I recently graduated from Mercyhurst University with a
          degree in Information Technology. I got into the world of programming
          and CS at an early age, but I'll elaborate on that in a blog post
          someday.
        </p>
        <h2>About my work</h2>
        <p>
          I have prior experience working with a lot of dev "stuff", but the
          most relevant ones to my work today are Node.js, Express.js, Hapi.js,
          MongoDB, MySQL, Firebase, React, and Angular. I also work with Python
          at times. I learned all of the fundamental Computer Science concepts
          using Python, because it was the language chosen by my school's CIS
          department. Here's a download link for my&nbsp;
          <a href={resume} download="YangLorenzana-Resume">
            <strong>resume</strong>
          </a>
          , and a link to my&nbsp;
          <a href="https://github.com/ylorenzana">
            <strong>GitHub</strong>
          </a>&nbsp;profile in case you're curious in viewing some of my work—I
          pinned the repos of some of the relevant projects I have worked on to
          the front page.
        </p>
        <p>
          I used to prefer back-end development, but the more I work with React,
          the more I have grown to enjoy writing code for the front-end. I am
          currently working on some small React projects, and I'm going to be
          blogging throughout the process, so stay tuned!
        </p>
        <Link to="/">
          <strong>Back to home page</strong>
        </Link>
      </article>
    </section>
    <Footer />
  </div>
);

export default About;
