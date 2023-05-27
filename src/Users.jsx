import React, { useState } from "react";

const Users = ({ id, name, email, onDelete, onEdit }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleOnEditSubmit = (evt) => {
    evt.preventDefault();
    onEdit(id, evt.target.name.value, evt.target.email.value);
    setIsEdit(!isEdit);
  };

  return (
    <>
      <div>
        {isEdit ? (
          <form onSubmit={handleOnEditSubmit}>
            <input placeholder="Name" name="name" defaultValue={name} />
            <input placeholder="Email" name="email" defaultValue={email} />
            <button onSubmit={handleOnEditSubmit}>Save</button>
          </form>
        ) : (
          <div className="user">
            <span className="user-name">{name}</span>
            <span className="user-email">{email}</span>
            <div>
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Users;
