import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";

import { DELETE_EVENT } from "../actions";

const Event = ({ index, event }) => {
  const { dispatch } = useContext(AppContext);
  const id = event.id;
  const handleClickDeleteButton = (e) => {
    e.preventDefault();
    const result = window.confirm(
      `イベント(id=${id})を本当に削除しても良いですか？`
    );
    if (result) dispatch({ type: DELETE_EVENT, id });
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
