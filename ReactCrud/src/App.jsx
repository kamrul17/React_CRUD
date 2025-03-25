import React from "react";

import "./App.css";
import GetMapping from "./components/GetMapping";
import PostMapping from "./components/PostMapping";
function App() {
  return (
    <>
      <h1>=========MAIN APP========</h1>
      <GetMapping />
      <hr />
      <PostMapping />
    </>
  );
}

export default App;
