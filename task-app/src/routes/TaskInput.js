import React from "react";
import { useState, useContext, useMemo } from "react";
import { TaskContext } from "../App";

export default function TaskInput() {
  const [taskDesc, setTaskDesc] = useState("");
  const [taskStat, setTaskStat] = useState("Not Started");
  const { taskData, setTaskData } = useContext(TaskContext);
  /* useMemo hook is to generate a new ID random number everytime a new Task is added to taskData*/
  const taskId = useMemo(() => Math.floor(Math.random() * 1000000), [taskData]);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setTaskData([
          ...taskData,
          { id: taskId, description: taskDesc, status: taskStat }
        ]);
        setTaskDesc("");
        setTaskStat("Not Started");
      }}
    >
      <label>
        Task ID:
        <input
          name="taskId"
          type="text"
          readOnly={true}
          value={taskId}
          style={{ background: "gainsboro" }}
        />
      </label>
      <br />
      <br />
      <label>
        Task Descritption:
        <input
          name="taskDescription"
          placeholder="Enter description here..."
          type="text"
          value={taskDesc}
          onChange={(event) => setTaskDesc(event.target.value)}
        />
      </label>
      <br />
      <br />
      <label>
        Task Status:
        <select
          value={taskStat}
          onChange={(event) => setTaskStat(event.target.value)}
        >
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </label>
      <br />
      <br />
      <input type="submit" />
      <br />
      <br />
    </form>
  );
}
