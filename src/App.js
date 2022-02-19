import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  //Variables | State
  const [input, setInput] = useState("");
  const [data, setData] = useState({ avatar_url: "" });
  // https://api.github.com/users/

  //Functions
  const handleClick = () => {
    axios.get(`https://api.github.com/users/${input}`).then((res) => {
      setData(res.data);
    });
  };

  //Return statement
  return (
    <div className="App">
      <h2>App component</h2>
      <input
        placeholder="enter name here"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={handleClick}>Click Me </button>
      <img src={data.avatar_url} />
    </div>
  );
}

export default App;
