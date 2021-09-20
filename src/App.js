import logo from "./logo.svg";
import "./App.css";

function App() {
  const styles = {
    border: '0px',
    padding: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: 'transparent'
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with apmplify
        </a>

        <div className="clickme">
          <iframe
            title="a"
            data-aa="1788631"
            src="//acceptable.a-ads.com/1788631"
            style={{ styles }}
          ></iframe>
        </div>

      </header>
    </div>
  );
}

export default App;
