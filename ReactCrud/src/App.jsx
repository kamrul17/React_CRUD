import React, { Suspense } from "react";

// import "./App.css";
// import GetMapping from "./components/GetMapping";
// import PostMapping from "./components/PostMapping";
// import Login from "./components/Login";
// import LazyLoading from "./components/LazyLoading";
// import UseMemo from "./components/UseMemo";
import UseCallBack from "./components/UseCallBack";

// const Lazy = React.lazy(() => import("./components/LazyLoading"));
function App() {
  return (
    <>
      <h1>=========MAIN APP========</h1>
      {/* <GetMapping />
      <hr />
      <PostMapping />
      <hr />
      <Login /> */}
      {/* <Suspense fallback={<div>This is fallback</div>}>
        <Lazy />
      </Suspense> */}
      {/* ========USEMEMO============== */}
      {/* <UseMemo /> */}
      {/* ========USECALLBACK============== */}
      <UseCallBack />
    </>
  );
}

export default App;
