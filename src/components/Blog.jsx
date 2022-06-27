import React from 'react';
import Navbar from './Navbar';
import HireMe from './HireMe';
import Bitmoji from './Bitmoji';
import Media from './Media';
import Resume from './Resume';
import FooterBg from './FooterBg';
import BlogComponent from './BlogComponent';

function Home() {
  return (
    <div className="blog">
      <div className="bitmoji-nav-div">
        <Bitmoji />
      </div>
      <Navbar />
      <div className="top-div">
        <div data-aos="fade-in">
          <Resume />
        </div>
        <HireMe />
      </div>
      <h3 className="blog-heading">Blog</h3>
      <div className="blog-title">
        <BlogComponent
          blogUrl="https://medium.com/@pradeepsg612/hello-world-in-every-programming-languages-74cbf4d242dc"
          blogHeading="Hello World"
          blogDesc="Hello world in every programming languages."
        />
        <BlogComponent
          blogUrl="https://medium.com/@pradeepsg612/publish-your-first-webpage-using-github-28253e4cf66"
          blogHeading="Publish your first webpage using GitHub"
          blogDesc="How to publish any static webpage into cloud using github."
        />
      </div>
      <FooterBg />
      <Media />
    </div>
  );
}

export default Home;
