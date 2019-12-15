import React from 'react';

const About = () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <div style={{ width: '50rem' }}>
      <div style={{ marginBottom: '1rem' }}>
        <h1>About</h1>
          Chess variants is a website for discovering and creating variants of chess.
          You can go to the
        {' '}
        <a href="/create">create page</a>
        {' '}
and publish your own variant by defining your own piece and board position.
          You can play one of
        {' '}
        <a href="/variants">our variants</a>
        {' '}
or standard chess with other users by creating a game on the
        {' '}
        <a href="/">home page</a>
.
          We will regularly select our favorite user-created variants and add them to the website.
      </div>
      <div>
        <h2>Contact us</h2>
          If you would like to contact us, feel free to send us an email by clicking
        {' '}
        <a href="mailto:schen023@citymail.cuny.edu?subject=about chess variants">here</a>
.
      </div>
    </div>
  </div>
);

export default About;
