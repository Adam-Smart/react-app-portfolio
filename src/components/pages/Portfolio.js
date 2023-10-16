import React from 'react';
import week1 from "../assets/week1.jpg";
import ChapterChatter from "../assets/ChapterChatter.jpg";
import Note from "../assets/Note-Taker.jpg";
import Jate from "../assets/Jate.jpg";
import Weather from "../assets/WeatherDash.jpg";
import Scheduler from "../assets/Scheduler.jpg";


export default function Portfolio() {
  return (
    <div>
    <h1>Portfolio</h1>
      <p>
     My Previous work:
      </p>

      <article style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>
      <section className='portfolio'>
        <h2>Horiseon</h2>
        <a href="https://adam-smart.github.io/week-1-code-refactor-challenge/"><img src={week1}></img></a>
        <a href="https://github.com/Adam-Smart/week-1-code-refactor-challenge">Repositiory</a>
      </section>
      
      <section className='portfolio'>
        <h2>Chapter Chatter</h2>
        <a href="https://chapter-chatter-project-032e4d6a934f.herokuapp.com/"><img src={ChapterChatter}></img></a>
        <a href="https://github.com/33hollie33/chapterchatter">Repositiory</a>
      </section>

      <section className='portfolio'>
        <h2>Note-Taker</h2>
        <a href="https://adams-note-taker-4e67211b2e7f.herokuapp.com"><img src={Note}></img></a>
        <a href="https://github.com/Adam-Smart/Express.js-Note-Taker">Repositiory</a>
      </section>

      <section className='portfolio'>
        <h2>Weather Dashboard</h2>
        <a href="https://adam-smart.github.io/week-6-server-side-API-weather-dashboard/"><img src={Weather}></img></a>
        <a href="https://github.com/Adam-Smart/week-6-server-side-API-weather-dashboard">Repositiory</a>
      </section>

      <section className='portfolio'>
        <h2>J.A.T.E</h2>
        <a href="https://adams-jate-text-editor-e48edddb6914.herokuapp.com/"><img src={Jate}></img></a>
        <a href="https://github.com/Adam-Smart/pwa-text-editor">Repositiory</a>
      </section>

      <section className='portfolio'>
        <h2>Work day Scheduler</h2>
        <a href="https://adam-smart.github.io/week-5-work-day-scheduler/"><img src={Scheduler}></img></a>
        <a href="https://github.com/Adam-Smart/week-5-work-day-scheduler">Repositiory</a>
      </section>
      
      </article>

      
      
    </div>
  );
}
