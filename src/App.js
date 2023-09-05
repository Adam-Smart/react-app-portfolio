import logo from './logo.svg';
import './App.css';
import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";

function App() {
    return (
      <div className="App">
        <header className="App-header">Adam Smart's Portfolio</header>
        <PortfolioContainer />
        <footer>
          <p><a href ="https://github.com/Adam-Smart">Github</a></p>
          <p><a href="https://www.linkedin.com/in/adam-smart-4ab57025a/">LinkedIn</a></p>
          <a href="https://twitter.com/Adam_Smart_98">X</a>

        </footer>
      </div>
    );
  }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// const App = () => <PortfolioContainer />;

export default App;
