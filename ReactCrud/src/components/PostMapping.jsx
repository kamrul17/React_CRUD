import axios from "axios";
import { useState } from "react";

function PostMapping() {
  const data = {
    userName: "",
    email: "",
    mobile: "",
    password: "",
  };
  const [inpData, setInpData] = useState(data);
  const [error, setError] = useState(null);
  const handleInpChange = (e) => {
    setInpData({ ...inpData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/v1/auth/user/sign-up", inpData)
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);

        setError(err.response.data.error);
        console.log(err.response.data.error); // Show backend message
      });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8080/api/v1/auth/user/1", inpData)
      .then((res) => {
        console.log(res);
        setInpData(res.data); // ✅ Set updated data correctly
      })
      .catch((err) => {
        // ✅ Move catch outside
        console.log(err);
        setError(err.response?.data?.error || "Error updating user");
      });
  };
  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete("http://localhost:8080/api/v1/auth/user/2")
      .then((res) => {
        console.log(res);
        setInpData(res.data); // ✅ Set updated data correctly
      })
      .catch((err) => {
        // ✅ Move catch outside
        console.log(err);
        setError(err.response?.data?.error || "Error updating user");
      });
  };
  return (
    <>
      <h1>=========Post MApping======</h1>
      {/* ShortCircuit operator */}
      {error && (
        <div style={{ color: "red", fontWeight: "bold" }}>Error: {error}</div>
      )}
      <hr />
      <input
        type="text"
        name="userName"
        value={inpData.userName}
        onChange={handleInpChange}
      ></input>
      <input
        type="text"
        name="email"
        value={inpData.email}
        onChange={handleInpChange}
      ></input>
      <input
        type="text"
        name="mobile"
        value={inpData.mobile}
        onChange={handleInpChange}
      ></input>
      <input
        type="text"
        name="password"
        value={inpData.password}
        onChange={handleInpChange}
      ></input>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      <hr />
      <button type="submit" onClick={handleUpdate}>
        Update
      </button>
      <hr />
      <button type="submit" onClick={handleDelete}>
        Delete
      </button>
    </>
  );
}
export default PostMapping;
