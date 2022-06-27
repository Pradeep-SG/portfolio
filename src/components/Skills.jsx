import React from 'react';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { FaBootstrap } from 'react-icons/fa';
import { DiJqueryLogo } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { FaNpm } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { SiMongodb } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { SiVisualstudiocode } from 'react-icons/si';
import { SiCodio } from 'react-icons/si';
import { SiCplusplus } from 'react-icons/si';
import { SiPython } from 'react-icons/si';
import { SiJava } from 'react-icons/si';
import { RiFileExcel2Line } from 'react-icons/ri';
import { SiTableau } from 'react-icons/si';

const Skills = () => {
  return (
    <div data-aos="zoom-in" className="skill-div">
      <div>
        <h3 data-aos="fade-in" className="skill">
          Web Development skills
        </h3>
      </div>
      <div className="skill-row frontend">
        <AiOutlineHtml5 className="skill-item" />
        <DiCss3 className="skill-item" />
        <IoLogoJavascript className="skill-item" />
      </div>
      <div className="skill-row frontend-frame">
        <FaReact className="skill-item" />
        <SiRedux className="skill-item" />
        <FaBootstrap className="skill-item" />
        <DiJqueryLogo className="skill-item" />
      </div>
      <div className="skill-row backend">
        <FaNodeJs className="skill-item" />
        <FaNpm className="skill-item" />
        <SiExpress className="skill-item" />
      </div>
      <div className="skill-row db">
        <SiMongodb className="skill-item" />
        <GrMysql className="skill-item" />
      </div>
      <div className="skill-row tools">
        <FaGitAlt className="skill-item" />
        <FaGithub className="skill-item" />
        <SiVisualstudiocode className="skill-item" />
      </div>
      <div>
        <h3 data-aos="fade-in" className="skill">
          Other Technical Skills
        </h3>
      </div>
      <div className="skill-row other">
        <SiCodio className="skill-item" />
        <SiCplusplus className="skill-item" />
        <SiPython className="skill-item" />
        <SiJava className="skill-item" />
        <RiFileExcel2Line className="skill-item" />
        <SiTableau title="Tableau" className="skill-item" />
      </div>
    </div>
  );
};

export default Skills;
