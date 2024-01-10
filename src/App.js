import './App.css';
import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import { SocialIcon } from 'react-social-icons'




function App() {
    return (
      <div className="App">
        <header className="App-header"></header>

        <PortfolioContainer />
        <body></body>

        <footer>
          <SocialIcon className="custom-class" target="_blank" url="https://www.linkedin.com/in/adam-smart-4ab57025a" />
          <SocialIcon className="custom-class" target="_blank" url="https://github.com/Adam-Smart" />
          <SocialIcon className="custom-class" target="_blank" url="https://x.com/Adam_Smart_98" />
          {/* <p><a href ="https://github.com/Adam-Smart">Github</a></p>
          <p><a href="https://www.linkedin.com/in/adam-smart-4ab57025a/">LinkedIn</a></p>
          <a href="https://twitter.com/Adam_Smart_98">X</a> */}

        </footer>
      </div>
    );
  }

export default App;
