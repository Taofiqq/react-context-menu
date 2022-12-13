import "./App.css";
import MenuContext from "./components/MenuContext";
import MenuContextHook from "./components/MenuContextHook";
import { data } from "./data/data";

function App() {
  return (
    <div className="App">
      {/* <MenuContext data={data} /> */}
      <MenuContextHook data={data} />
    </div>
  );
}

export default App;
