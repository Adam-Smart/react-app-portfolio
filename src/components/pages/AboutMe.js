import React from 'react';
import Me from "../assets/PortfolioPic.jpg"



export default function AboutMe() {
  return (
    <div>
      <h1>About Me Page</h1>
      <section className='profile'>
        <img className = "profile" src={Me} alt="Adam Smart"></img>
      <p>
      Hello my name is Adam Smart. I am 24 years old I am currently learning how to code but have preiviously studied business studies, media studies, IT, and applied science in sixthform. 
      For the past six years i have been working ASDA where ive learned many new skills and have had to adapt to changes that they have made by them improving there inventory management.
      I have a few different hobbies, one of them being gaming. I enjoy many differnt game genres but the main i play are FPS and Simulators.
      Another hobby of mine is snowboarding. I started snowboarding about 7 years ago and love going to the mountains.
      </p>
      </section>
    </div>
    
  );
}
