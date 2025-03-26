import { useEffect, useState } from "react";
import axios from "axios";

function GetMapping() {
  const [userdata, setUserData] = useState([]);
  const token = localStorage.getItem("token");
  console.log(token);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/auth/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      .then((req) => {
        if (!req || !req.data) {
          console.error("No data received");
          return;
        }
        console.log("Response Data:", req.data);
        // console.log(req.data);
        // setUserData(req.data);
      });
  }, []);

  return (
    <>
      <h1>GetMapping example</h1>
      {/* {userdata.map((data, index) => {
        return (
          <ol key={index}>
            <li>{data.userName}</li>
            <li>{data.email}</li>
            <li>{data.mobile}</li>
          </ol>
        );
      })} */}
    </>
  );
}
export default GetMapping;
// ==================
// import { useEffect, useState } from "react";
// import axios from "axios";

// function GetMapping() {
//   const [userdata, setUserData] = useState([]);
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     if (!token) {
//       console.error("No token found. Please log in.");
//       return;
//     }

//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:8080/api/v1/auth/users",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         console.log(response.data);
//         setUserData(response.data);
//       } catch (error) {
//         console.error(
//           "Failed to fetch user data:",
//           error.response?.data || error.message
//         );
//       }
//     };

//     fetchData();
//   }, [token]); // Dependency added

//   return (
//     <>
//       <h1>GetMapping Example</h1>
//       {userdata.length > 0 ? (
//         userdata.map((data) => (
//           <ol key={data.userId}>
//             {" "}
//             {/* Assuming `userId` exists */}
//             <li>
//               <strong>Name:</strong> {data.userName}
//             </li>
//             <li>
//               <strong>Email:</strong> {data.email}
//             </li>
//             <li>
//               <strong>Mobile:</strong> {data.mobile}
//             </li>
//           </ol>
//         ))
//       ) : (
//         <p>No user data found.</p>
//       )}
//     </>
//   );
// }

// export default GetMapping;
