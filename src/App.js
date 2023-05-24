import React, { useEffect, useState } from "react";
import Users from "./Users";
import "./App.css";
import AddUser from "./AddUser";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    };

    fetchData();
  }, []);

  const onAdd = async (name, email) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await res.json();
    setUsers((users) => [...users, data]);
  };

  return (
    <>
      <div className="App">
        <h1>React CRUD using JSON place Holder</h1>
        <br />
        <AddUser onAdd={onAdd} />
        <div>
          {users.map((item) => {
            return (
              <Users
                id={item.id}
                key={item.id}
                name={item.name}
                email={item.email}
              
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
