import React from "react";

function TodoInput({ item, handleChange, handleSubmit, editItem }) {
  return (
    <div className="card card-body my-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="div input-group-text bg-primary text-white">
              <i className="fas fa-book" />
            </div>
          </div>
          <input
            type="text"
            className="form-control text-capitalize"
            value={item}
            onChange={handleChange}
            placeholder="add a todo item..."
          ></input>
        </div>
        <button
          type="submit"
          className={
            editItem
              ? "btn btn-block btn-success mt-3"
              : "btn btn-block btn-primary mt-3"
          }
        >
          {editItem ? "edit item" : "add item"}
        </button>
      </form>
    </div>
  );
}

export default TodoInput;
