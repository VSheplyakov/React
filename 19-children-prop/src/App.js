import './App.css';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper backgroundcolor="lightblue" width="350px" color="red">
        <h2>Text inside of the Wrapper</h2>
        <button>Click me!</button>
      </Wrapper>
      <Wrapper backgroundcolor="lightgreen" width="250px" color="grey">
        <h2>Another text</h2>
        <p>Some description</p>
        <input type="text" placeholder="Enter value"></input>
      </Wrapper>
    </div>
  );
}

export default App;
