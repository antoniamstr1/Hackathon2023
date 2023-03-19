import React, { Component, useState } from "react";

/* export default function SignUp() {
  const [user_id, setUserId] = useState("");
  const [name, setName] = useState("");
  const [ipAdresa, setIpAdresa] = useState("");
  const [tip, setTip] = useState(""); */

   /* const handleSubmit = async (e) => {
    if (role === "Admin" && secretKey !== "AdarshT") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();

      console.log(name, ipAdresa, user_id, tip);
      await fetch("http://localhost:5000/getDevice", {
        method: "GET"}).then((res) => res.json())
        .then((data) => {
          console.log(data);
          setUserId(data.user_id);
          setName(data.name);
          setIpAdresa(data.ipAdresa);
          setTip(data.tip);
        });
        
    }
  };

  return ; */
  const App = () => {
    const [users, setUsers] = useState([])
  
    /* const fetchUserData = () => {
      fetch("http://localhost:5000/getDevice")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setUsers(data)
        })
    } */
  
    // useEffect(() => {
    //   //fetchUserData()
    // }, [])
  
    useEffect(() => {
        fetch("http://localhost:5000/userData", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            token: window.localStorage.getItem("token"),
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "userData");
           
          });
      }, []);
    return (
      <div>
        {users.length > 0 && (
          <ul>
            {users.map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  
  export default App;
