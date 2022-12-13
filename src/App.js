import "./App.css";
import MenuContext from "./components/MenuContext";
import MenuContextHook from "./components/MenuContextHook";
import { data } from "./data/data";

function App() {
  return (
    <div
      className="App"
      onContextMenu={(e) => {
        e.preventDefault();

        console.log("Right Click", e);
      }}
    >
      Context Menu
      {/* <MenuContext data={data} /> */}
      {/* <MenuContextHook data={data} /> */}
    </div>
  );
}

export default App;
