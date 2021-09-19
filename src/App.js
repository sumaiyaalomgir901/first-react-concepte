import logo from "./logo.svg";
import "./App.css";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";

function App() {
  const friendName = ["arif", "ank", "shamim", "kollol"];
  const friendDetails = [
    { name: "Arif", district: "cumilla" },
    { name: "Anik", district: "meherpur" },
    { name: "kollol", district: "dinajpur" },
    { name: "shamim", district: "dinajpur" },
  ];

  return (
    <div>
      <h1>Similar in look AND similar in data</h1>
      <Personal></Personal>
      <Personal></Personal>
      <h1>Similar in look AND Different in data</h1>
      <h2>FRIENDS </h2>
      <ul>
        {friendName.map((f) => (
          <li>{f}</li>
        ))}
      </ul>
      <div className="friend-area">
        {friendDetails.map((fd) => (
          <Friends name={fd.name} district={fd.district}></Friends>
        ))}
      </div>
    </div>
  );
}
function Personal() {
  return (
    <div className="person">
      <h1>Sumaiya Alomgir</h1>
      <h4>React Developer</h4>
    </div>
  );
}
function Friends(props) {
  return (
    <div className="friend">
      <h3>Name: {props.name}</h3>
      <h4>District: {props.district}</h4>
    </div>
  );
}
// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
export default App;
