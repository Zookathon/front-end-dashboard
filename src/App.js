import "./App.css";
import React, { useState } from "react";
import { useAsync } from "react-async-hook";
import { reportFetcher, sendDelete, sendDone } from "./utils/index.js";

import NavBar from "./components/Navbar";
import Sumerize from "./components/Sumarize";
import Table from "./components/Table";
function App() {
  const [solvedReport, changeSolvedReport] = useState([]);
  const [unsolvedReport, changeUnSolvedReport] = useState([]);

  const asyncFetchData = useAsync(async () => {
    await reportFetcher().then((data) => {
      let solved = data.filter((report) => report.isDone === true);
      let unsolved = data.filter((report) => report.isDone === false);
      changeUnSolvedReport(unsolved);
      changeSolvedReport(solved);
    });
  });

  const doneHandler = (id) => {
    let filtered = unsolvedReport.filter((report) => report._id !== id);
    changeUnSolvedReport(filtered);
    sendDone(id);
  };
  const deleteHandler = (id) => {
    let filtered = unsolvedReport.filter((report) => report._id !== id);
    changeUnSolvedReport(filtered);
    sendDelete(id);
  };
  return (
    <div className="App bg-gray-100 h-screen">
      <NavBar />
      <div>
        {asyncFetchData.loading && (
          <div>Connecting to server, please wait...</div>
        )}
        {asyncFetchData.error && (
          <div>Error: {asyncFetchData.error.message}</div>
        )}
        {unsolvedReport && (
          <div>
            <div className="flex flex-row flex-grow-0 justify-center">
              <Sumerize
                title="Unsolved report"
                number={unsolvedReport.length}
              />
              <Sumerize title="Solved report" number={solvedReport.length} />
            </div>
            <p className="text-2xl">Unsolved report</p>
            <Table
              data={unsolvedReport}
              deleteHandler={deleteHandler}
              markdoneHandler={doneHandler}
            />
            <p className="text-2xl">Solved report</p>
            <Table
              data={solvedReport}
              deleteHandler={deleteHandler}
              markdoneHandler={doneHandler}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
