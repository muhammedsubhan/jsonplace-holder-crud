import React, { useEffect, useState } from "react";
import Users from "./Users";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isEditItem, setEditItem] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    };

    fetchData();
  }, []);

  const onAdd = async (e) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await res.json();
    setUsers((users) => {
      return [...users, data];
    });

    setFormData({
      name: "",
      email: "",
    });

    if (formData && !toggle) {
      setUsers(
        users.map((ele) => {
          if (ele.id === isEditItem) {
            return { ...ele, name: users };
          }
          return ele;
        })
      );
    }
  };

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    });

    setUsers(
      users.filter((user) => {
        return user.id !== id;
      })
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onEdit = (id) => {
    let newEditItem = users.find((ele) => {
      return id === ele.id;
    });

    console.log(newEditItem);
    setToggle(true);
    setFormData(newEditItem);
    setEditItem(id);
  };

  return (
    <>
      <div className="App">
        <h1>React CRUD using JSON place Holder</h1>
        <br />
        <div>
          <h3>Add User</h3>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <button onClick={onAdd}>Add</button>
          {toggle ? "edit" : "add"}
        </div>
        <div>
          {users.map((item) => {
            return (
              <Users
                id={item.id}
                key={item.id}
                name={item.name}
                email={item.email}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
