import { Header } from "./components/Header";
import { AddTasks } from "./components/AddTasks";
import { ShowTasks } from "./components/ShowTasks";

import "./App.css";

function App() {
  // let obj = { key: "value" };
  // localStorage.setItem("myObject", JSON.stringify(obj));

  return (
    <div className="App">
      <Header />
      <AddTasks />
      <ShowTasks />
      <h1>Hello</h1>
    </div>
  );
}

export default App;
