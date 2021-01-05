import React from "react";

const Event = ({ index, event, dispatch }) => {
  const id = event.id;
  const handleClickDeleteButton = (e) => {
    e.preventDefault();
    dispatch({ type: "DELETE_EVENT", id });
  };

  return (
    <tr key={index}>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleClickDeleteButton}
        >
          削除
        </button>
      </td>
    </tr>
  );
};

export default Event;
