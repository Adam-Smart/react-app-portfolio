import React from 'react';
import CV from "../../Files/Resume.pdf"
export default function Resume() {
  return (
    <div style ={{paddingBottom:"30%"}}>
      <h1>Resume Page</h1>
      <a href={CV} download={CV}>Resume</a>
      <ul>
        <li>Javascript</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
    </div>
  );
}
