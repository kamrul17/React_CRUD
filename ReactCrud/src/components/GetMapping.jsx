import { useEffect, useState } from "react";
import axios from "axios";

function GetMapping() {
  const [userdata, setUserData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/auth/users").then((req) => {
      console.log(req.data);
      setUserData(req.data);
    });
  }, []);

  return (
    <>
      <h1>GetMapping example</h1>
      {userdata.map((data, index) => {
        return (
          <ol key={index}>
            <li>{data.userName}</li>
            <li>{data.email}</li>
            <li>{data.mobile}</li>
          </ol>
        );
      })}
    </>
  );
}
export default GetMapping;
