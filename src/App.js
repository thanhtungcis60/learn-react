import logo from './logo.svg';
import './App.css';

function One(){
  return (<div>
    <h2>So 1 tap 1</h2>
    <h3>So 1 tap 2</h3>
  </div>)
}

var Two = function (){
  return (<div>
    <h3>So 2 tap 1</h3>
    <h3>So 2 tap 2</h3>
  </div>)
}
var Three = () => (<div>
    <h3>So 3 tap 1</h3>
    <h3>So 3 tap 2</h3>
  </div>)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <One/>
        <Two></Two>
        <Three/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
