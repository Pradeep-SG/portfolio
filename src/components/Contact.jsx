import React, {useEffect, useState, useRef} from "react";
import { useForm } from 'react-hook-form';
import { useSpring, animated } from 'react-spring';
import emailjs from '@emailjs/browser';
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";
import HireMe from "./HireMe";
import Bitmoji from "./Bitmoji";
import Skills from "./Skills";
import Media from "./Media";
import ParticleBackground from "./ParticleBackground";
import Resume from "./Resume";
import FooterBg from "./FooterBg";
import ProjectDiv from "./ProjectDiv";
import { RiLinkedinLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { MdDoneAll } from "react-icons/md";
import { ImSad } from "react-icons/im";

function Home() {

  const form = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    emailjs.sendForm('gmail', 'template_ha2jth3', form.current, 'TlC8AWv2ytGV8FsF9')
      .then(() => {
        setResponse(true);
        isSent(true);
      })
      .catch(() => {
        setResponse(true);
        isFailure(true);
      });
  }

  const [response, setResponse] = useState(false)
  const [failure, isFailure] = useState(false);
  const [sent, isSent] = useState(false);

  const responseStyle = useSpring({
    opacity: response ? "1" : "0",
    transform: response ? "scale(1)" : "scale(0)"
  });

  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);


  return (
    <div className="contact">
      <div className="bitmoji-nav-div" >
        <Bitmoji />
      </div>
      <Navbar />
      <div className="top-div">
        <Resume />
        <HireMe />
      </div>
      <h2 className="blog-heading">Contact</h2>
      <div className="contact-div">
        <div className="get-in-touch">
          <h3>Get in Touch</h3>
          <p>pradeepsg612@gmail.com</p>
          <a href="https://www.linkedin.com/in/pradeep-sg/" target="blank">
            <span><RiLinkedinLine /></span>
            LinkedIn
          </a>
          <a href="https://github.com/Pradeep-SG" target="blank">
            <span><FaGithub /></span>
            GitHub
          </a>
        </div>
        <div className="right-form-div">
          {sent &&
          <animated.div 
            className="response-div sent"
            style={responseStyle}
          >
            <div className="done"><MdDoneAll /></div>
            <h3>Email received successfully</h3>
            <p>Will reach you sooner</p>
          </animated.div>
          }
          {failure &&
          <animated.div 
            className="response-div failure"
            style={responseStyle}
          >
            <div className="done"><ImSad /></div>
            <h3>There was an error</h3>
            <p>Try again after sometime</p>
          </animated.div>
          }
          <form ref={form} onSubmit={handleSubmit(onSubmit)} className="form-div">
            <input type="text" placeholder="Email" autoComplete="off"
              {...register('email', {required: "Email is required", pattern: {value: /^\S+@\S+$/i, message:"Invalid mail id"}})}
            />
            <p>{errors.email?.message}</p>
            <input type="text" placeholder="Name" autoComplete="off"
              {...register('name', { required: true })}
            />
            {errors.name && <p>Name is required.</p>}
            <div className="grow-wrap">
              <textarea placeholder="Message" 
                autoComplete="off"
                rows="6"
                {...register('message', { required: true })}
              />
            </div>
            {errors.message && <p>Message is required.</p>}
            <div>
            <button className="btn-submit" type="submit" value="send">Send</button>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  );
}

export default Home;

