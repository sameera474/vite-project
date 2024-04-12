import "./App.css";
import { Home } from "./components/Home";

function App() {
  const name = "sameera";
  const age = 20;
  return (
    <>
      <div className="App">
        <p>My name is {name}</p>
        <p>My age is {age}</p>
        <div className="content">
          <Home></Home>
          <Home />
        </div>
      </div>
      <p>Some text</p>
    </>
  );
}

export default App;
