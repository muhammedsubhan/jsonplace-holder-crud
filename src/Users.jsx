import React from "react";

const Users = ({ id, name, email }) => {
  return (
    <>
      <div className="list">
        <span>{id}</span>
        <span>{name}</span>
        <span>{email}</span>
      </div>
    </>
  );
};

export default Users;
