import * as React from "react";
import { useState, useContext, useEffect } from "react";
import { TaskContext } from "../App";

export default function Task(t) {
  const {
    taskData,
    setTaskData,
    indexClicked,
    setIndexClicked,
    editTable,
    setEditTable,
    cancelClicked,
    saveClicked,
    deleteClicked
  } = useContext(TaskContext);
  const [desc, setDesc] = useState(t.description);
  const [stat, setStat] = useState(t.status);

  /* the below useEffect is to reset the properties when Cancel button is clicked */
  /*we used useEffect to prevent re-rendering of desc and stat with their setState*/
  useEffect(() => {
    setDesc(t.description);
    setStat(t.status);
    setIndexClicked(-1);
    setEditTable(false);
  }, [cancelClicked]);

  /*When Delete Button is clicked*/
  useEffect(() => {
    setTaskData(taskData.filter((task) => task.id !== indexClicked));
    setIndexClicked(-1);
  }, [deleteClicked]);

  /* When Edit button is clicked */
  if (editTable === true && indexClicked === t.id) {
    /*When Save button is clicked */
    if (saveClicked) {
      setTaskData(
        taskData.map((task) => {
          if (task.id === indexClicked)
            return { ...task, description: desc, status: stat };
          else return task;
        })
      );
      setIndexClicked(-1);
      setEditTable(false);
    }
    return (
      <tr
        className="task"
        onClick={() => setIndexClicked(t.id)}
        style={
          indexClicked === t.id
            ? { background: "cyan" }
            : { background: "white" }
        }
      >
        <td>{t.id}</td>
        <td>
          <input
            type="text"
            value={desc}
            onChange={(event) => setDesc(event.target.value)}
          />
        </td>
        <td>
          <select
            value={stat}
            onChange={(event) => setStat(event.target.value)}
          >
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </td>
      </tr>
    );
  }
  return (
    <tr
      className="task"
      onClick={() => setIndexClicked(t.id)}
      style={
        indexClicked === t.id ? { background: "cyan" } : { background: "white" }
      }
    >
      <td>{t.id}</td>
      <td>{t.description}</td>
      <td>{t.status}</td>
    </tr>
  );
}
