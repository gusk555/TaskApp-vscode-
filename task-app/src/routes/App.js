import * as React from "react";
import TaskTable from "./routes/TaskTable";
import TaskInput from "./routes/TaskInput.js";
import Data from "./routes/TaskData.json";
import "./style.css";
import { useState, createContext } from "react";

export const TaskContext = createContext(null);

export default function App() {
  const [taskData, setTaskData] = useState(Data);
  const [indexClicked, setIndexClicked] = useState(-1);
  const [editTable, setEditTable] = useState(false);
  const [cancelClicked, setCancelClicked] = useState(false);
  const [saveClicked, setSaveClicked] = useState(false);
  const [deleteClicked, setDeleteClicked] = useState(false);
  return (
    <div className="App">
      <TaskContext.Provider
        value={{
          taskData,
          setTaskData,
          indexClicked,
          setIndexClicked,
          editTable,
          setEditTable,
          cancelClicked,
          setCancelClicked,
          saveClicked,
          setSaveClicked,
          deleteClicked,
          setDeleteClicked
        }}
      >
        <TaskInput />
        <TaskTable />
      </TaskContext.Provider>
    </div>
  );
}
