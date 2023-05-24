import React from "react";

const AddUser = ({ onAdd }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    onAdd(e.target.name.value, e.target.email.value);

    e.target.name.value = "";
    e.target.email.value = "";
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <h3>Add User</h3>
          <input type="text" placeholder="Name" name="name" />
          <input type="text" placeholder="Email" name="email" />
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
};

export default AddUser;
