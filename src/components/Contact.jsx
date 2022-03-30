import React, { useState, useEffect, useRef} from "react";
import { useForm } from 'react-hook-form';
import { useSpring, animated } from 'react-spring';
import emailjs from '@emailjs/browser';
import Navbar from "./Navbar";
import Bitmoji from "./Bitmoji";
import Resume from "./Resume";
import { RiLinkedinLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BsMedium } from "react-icons/bs";
import { MdDoneAll } from "react-icons/md";
import { ImSad } from "react-icons/im";

function Home() {

  const [isLoad, setIsLoad] = useState(false);

  const loadStyle = useSpring({
    delay: 300,
    opacity: isLoad ? "1" : "0"
  });

  useEffect(() => {
    setIsLoad(true);
  }, []);

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

  return (
    <animated.div
      style={loadStyle}
      className="contact"
    >
      <div className="bitmoji-nav-div" >
        <Bitmoji />
      </div>
      <Navbar />
      <div data-aos="fade-in" className="top-div contact-top-div">
        <Resume />
      </div>
      <h2 className="blog-heading">Contact</h2>
      <div className="contact-div">
        <div className="get-in-touch">
          <h3>Get in Touch</h3>
          <a href="mailto:pradeepsg612@gmail.com">
            <span><FiMail /></span>
            pradeepsg612@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/pradeep-sg/" target="blank">
            <span><RiLinkedinLine /></span>
            LinkedIn
          </a>
          <a href="https://github.com/Pradeep-SG" target="blank">
            <span><FaGithub /></span>
            GitHub
          </a>
          <a href="https://medium.com/@pradeepsg612" target="blank">
            <span><BsMedium /></span>
            Medium
          </a>
        </div>
        <div className="right-form-div">
          {sent &&
          <animated.div 
            className="response-div sent"
            style={responseStyle}
          >
            <div className="done"><MdDoneAll /></div>
            <h3>Email sent successfully</h3>
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
    </animated.div>
  );
}

export default Home;

