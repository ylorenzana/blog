import React from 'react';
import { Link } from 'gatsby';
import { css } from 'emotion';

import { mq, mainContent, contentWrapper } from '../layouts/cssConstants';
import Header from '../components/Header';
import SEO from '../components/SEO';
import HomeButton from '../components/HomeButton';
import Footer from '../components/Footer';
import resume from '../assets/Lorenzana-Resume-Current.pdf';

const aboutParagraph = css(mq({ gridColumn: ['2 / -2', '2 / -2', '3 / -3'] }), {
  padding: '1rem',
  lineHeight: '2',
  margin: '0',
  h2: {
    margin: 0,
  },
});

const About = () => (
  <div className={contentWrapper}>
    <SEO title="About Yang Lorenzana" />
    <Header />
    <div className={mainContent}>
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
          at times. I learned all of the fundamental Computer Science and
          object-oriented programming concepts using Python, because it was the
          language chosen by my school's CIS department. Here's a download link
          for my&nbsp;
          <a href={resume} download="YangLorenzana-Resume">
            resume
          </a>
          , and a link to my&nbsp;
          <a href="https://github.com/ylorenzana">GitHub</a>&nbsp;profile in
          case you're curious in viewing some of my work—I pinned the repos of
          some of the relevant projects I have worked on to the front page.
        </p>
        <p>
          I used to prefer back-end development, but the more I work with React,
          the more I have grown to enjoy writing code for the front-end. I am
          currently working on some small React projects, and I'm going to be
          blogging throughout the process, so stay tuned!
        </p>
        <HomeButton />
      </article>
    </div>
    <Footer />
  </div>
);

export default About;
