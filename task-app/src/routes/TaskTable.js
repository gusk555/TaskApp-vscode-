import * as React from "react";
import Task from "./Task";
import { useContext, useEffect } from "react";
import { TaskContext } from "../App";

export default function TaskTable() {
  /*To reset the buttons everytime the table is loaded */
  useEffect(() => {
    setCancelClicked(false);
    setSaveClicked(false);
    setDeleteClicked(false);
  });
  const {
    taskData,
    indexClicked,
    setEditTable,
    setCancelClicked,
    setSaveClicked,
    setDeleteClicked
  } = useContext(TaskContext);

  return (
    <div className="TaskTable">
      <button
        name="SaveButtonTable"
        onClick={() => {
          setSaveClicked(true);
        }}
      >
        Save
      </button>
      <button
        name="CancelButtonTable"
        onClick={() => {
          setCancelClicked(true);
        }}
      >
        Cancel
      </button>
      <button
        name="EditButtonTable"
        onClick={() => {
          indexClicked !== -1 ? setEditTable(true) : setEditTable(false);
        }}
      >
        Edit
      </button>
      <button
        name="DeleteButtonTable"
        onClick={() => {
          indexClicked !== -1
            ? setDeleteClicked(true)
            : setDeleteClicked(false);
        }}
      >
        Delete
      </button>
      <table>
        <thead>
          <tr>
            <th style={{ width: "10℅" }}>ID</th>
            <th>Description</th>
            <th style={{ width: "20%" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {taskData.map((task, index) => {
            return <Task key={index} {...task} />;
          })}
        </tbody>
      </table>
      <br />
      <br />
    </div>
  );
}
