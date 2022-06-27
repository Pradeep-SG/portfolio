import React from 'react';
import Project from './Project';
import comprarImg from '../images/projects/comprar.jpg';
import epistleImg from '../images/projects/Epistle.jpg';
import todoImg from '../images/projects/todo.jpg';
import adviceImg from '../images/projects/Advice-generator.jpg';
import spliterImg from '../images/projects/spliter.jpg';
import newsLetterImg from '../images/projects/newsletter.jpg';
import simonImg from '../images/projects/simon.jpg';
import drumKitImg from '../images/projects/drumkit.jpg';
import tindogImg from '../images/projects/tindog.jpg';

const ProjectDiv = () => {
  return (
    <div className="project-content">
      <div className="project-mid">
        <Project
          imgUrl={comprarImg}
          title="Comprar - ECommerce website"
          desc="A full fledged, full stack ecommerce website with paypal integration. Stack used - MERN"
          live="https://comprar.herokuapp.com/"
          github="https://github.com/Pradeep-SG/comprar-ecommerce"
        />
      </div>
      <div className="main-content-portfolio">
        <Project
          imgUrl={epistleImg}
          title="Mern Epistle"
          desc="Note taking application connected to the database. Stack used - MERN"
          live="https://pradeepsg-epistle-mern.herokuapp.com/"
          github="https://github.com/Pradeep-SG/MERN-Epistle"
        />
        <Project
          imgUrl={todoImg}
          title="ToDo List"
          desc="A ToDo list application running with Express.js, MongoDB at backend and EJS."
          live="https://pradeepsg-todolist.herokuapp.com/"
          github="https://github.com/Pradeep-SG/todo-list"
        />
      </div>
      <div className="project-mid">
        <Project
          imgUrl={adviceImg}
          title="Advice Generator"
          desc="Random advice generator with API calls and React.js at frontend."
          live="https://pradeep-sg.github.io/advice-generator-reactjs/"
          github="https://github.com/Pradeep-SG/advice-generator-reactjs"
        />
      </div>
      <div className="main-content-portfolio">
        <Project
          imgUrl={spliterImg}
          title="Spliter"
          desc="This is a simple React application for spliting bills with tip%."
          live="https://pradeep-sg.github.io/spliter/"
          github="https://github.com/Pradeep-SG/spliter"
        />
        <Project
          imgUrl={newsLetterImg}
          title="NewLetter SignUp"
          desc="Newsletter registration application with mailchimp API and Express.js at backend."
          live="https://pradeepsg-newsletter.herokuapp.com/"
          github="https://github.com/Pradeep-SG/newsletter-signup"
        />
      </div>
      <div className="project-mid">
        <Project
          imgUrl={simonImg}
          title="Simon Game"
          desc="Memory game done using jQuery framework, build on HTML, CSS."
          live="https://pradeep-sg.github.io/simon-game/"
          github="https://github.com/Pradeep-SG/simon-game"
        />
      </div>
      <div className="main-content-portfolio">
        <Project
          imgUrl={drumKitImg}
          title="DrumKit"
          desc="JavaScript beginner project to learn about keyboard and mouse event listeners."
          live="https://pradeep-sg.github.io/drumkit/"
          github="https://github.com/Pradeep-SG/drumkit"
        />
        <Project
          imgUrl={tindogImg}
          title="TinDog"
          desc="TinDog is a mockup website done using pure Bootstrap v5."
          live="https://pradeep-sg.github.io/tindog/"
          github="https://github.com/Pradeep-SG/tindog"
        />
      </div>
    </div>
  );
};

export default ProjectDiv;
