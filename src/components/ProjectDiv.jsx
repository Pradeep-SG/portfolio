import React from "react";
import Project from "./Project";
import epistleImg from "../images/projects/Epistle.jpg";
import todoImg from "../images/projects/todo.jpg";
import adviceImg from "../images/projects/Advice-generator.jpg";
import spliterImg from "../images/projects/spliter.jpg";
import newsLetterImg from "../images/projects/newsletter.jpg";
import simonImg from "../images/projects/simon.jpg";
import drumKitImg from "../images/projects/drumkit.jpg";
import tindogImg from "../images/projects/tindog.jpg";

const ProjectDiv = () => {
  return (
    <div className="project-content">
      <div className="main-content-portfolio">
        <Project 
          imgUrl={epistleImg}
          title="Mern Epistle"
          desc="Description of Epistle"
          live="https://pradeepsg-epistle-mern.herokuapp.com/"
          github="https://github.com/Pradeep-SG/MERN-Epistle"
        />
        <Project 
          imgUrl={todoImg}
          title="ToDo List"
          desc="Description of toDo"
          live="https://pradeepsg-todolist.herokuapp.com/"
          github="https://github.com/Pradeep-SG/todo-list"
        />
      </div>
      <div className="project-mid">
        <Project 
          imgUrl={adviceImg}
          title="Advice Generator"
          desc="Description of Advice"
          live="https://pradeep-sg.github.io/advice-generator-reactjs/"
          github="https://github.com/Pradeep-SG/advice-generator-reactjs"
        />
      </div>
      <div className="main-content-portfolio">
        <Project 
          imgUrl={spliterImg}
          title="Spliter"
          desc="Description of Spliter"
          live="https://pradeep-sg.github.io/spliter/"
          github="https://github.com/Pradeep-SG/spliter"
        />
        <Project 
          imgUrl={newsLetterImg}
          title="NewLetter SignUp"
          desc="Description of newsletter"
          live="https://pradeepsg-newsletter.herokuapp.com/"
          github="https://github.com/Pradeep-SG/newsletter-signup"
        />
      </div>
      <div className="project-mid">
        <Project 
          imgUrl={simonImg}
          title="Simon Game"
          desc="Description of Simon"
          live="https://pradeep-sg.github.io/simon-game/"
          github="https://github.com/Pradeep-SG/simon-game"
        />
      </div>
      <div className="main-content-portfolio">
        <Project 
          imgUrl={drumKitImg}
          title="DrumKit"
          desc="Description of Drum kit"
          live="https://pradeep-sg.github.io/drumkit/"
          github="https://github.com/Pradeep-SG/drumkit"
        />
        <Project 
          imgUrl={tindogImg}
          title="TinDog"
          desc="Description of tindog"
          live="https://pradeep-sg.github.io/tindog/"
          github="https://github.com/Pradeep-SG/tindog"
        />
      </div>
    </div>
  )
}

export default ProjectDiv;