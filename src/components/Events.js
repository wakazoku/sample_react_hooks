import React from "react";
import Event from "./Event";
import AppContext from "../contexts/AppContext";

const Events = ({ state, dispatch }) => {
  return (
    <React.Fragment>
      <AppContext.Consumer>
        {(value) => {
          return <div>{value}</div>;
        }}
      </AppContext.Consumer>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディ</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.map((event, index) => (
            <Event key={index} event={event} dispatch={dispatch} />
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Events;
