import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
// import { CategoryList } from "./CategoryList";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />

        <div className="content">
          {/* <Home></Home> */}

          <Home />
          {/* <CategoryList /> */}
        </div>
      </div>
    </>
  );
}

export default App;
