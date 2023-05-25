import React from "react";

const Users = ({ id, name, email, onDelete }) => {
  return (
    <>
      <div className="list">
        <span>{id}</span>
        <span>{name}</span>
        <span>{email}</span>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </>
  );
};

export default Users;
