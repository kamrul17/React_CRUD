import axios from "axios";
import React, { useEffect } from "react";

function Login() {
  const credentials = {
    userName: "testing",
    password: "testing111",
  };
  useEffect(() => {
    axios
      .post("http://localhost:8080/api/v1/auth/login", credentials)
      .then((res) => {
        console.log(res.data);
        const token = res.data;
        localStorage.setItem("token", token);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>Logging</h1>
    </>
  );
}

export default Login;
