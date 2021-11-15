import React from "react";

import useTable from "react-table";

const Table = (props) => {
  /*const data = React.useMemo(() => [
    {
      Header: "Title",
      accessor: "act",
    },
    {
      Header: "Time",
      accessor: "date",
      Cell: ({ cell: { value } }) => {
        const date = new Date(value);
        const dateTimeString = `${date.getDate}-${date.getMonth}-${date.getFullYear}`;
        return <>{dateTimeString}</>;
      },
    },
    {
      Header: "Location",
      accessor: "location",
    },
    {
      Header: "Urgency",
      accessor: "urgency",
      Cell: ({ cell: { value } }) => {
        if (value === 1) {
          return <span>Urgent</span>;
        } else if (value === 2) {
          return <span>Crititcal</span>;
        } else {
          return <span>Normal</span>;
        }
      },
    },
    {
      Header: "Votes",
      accessor: "vote",
    },
    {
      Header: "Action",
    },
  ]);*/
  return (
    <table className="border-collapse border container mx-auto mb-8">
      <thead>
        <tr className="bg-pink-200 h-12">
          <th className="border-collapse border rounded-tl-2x1 font-medium ">
            Activity
          </th>
          <th className="border-collapse border font-medium">Time</th>
          <th className="border-collapse border font-medium">Location</th>
          <th className="border-collapse border font-medium">Urgency</th>
          <th className="border-collapse border font-medium">Votes</th>
          <th className="border-collapse border rounded-tr-2x1 font-medium">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((report, index) => {
          const date = new Date(report.date);
          const timeString = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
          const urgencyString =
            report.urgency === 0
              ? "Normal"
              : report.urgency === 1
              ? "Urgent"
              : "Critical";
          return (
            <tr
              key={report._id}
              className={index % 2 === 0 ? "bg-white" : "bg-pink-100"}
            >
              <td className="border-collapse border border-4 text-left pl-4">
                {report.act}
              </td>
              <td className="border-collapse border border-4">{timeString}</td>
              <td className="border-collapse border border-4">
                {report.location}
              </td>
              <td className="border-collapse border border-4 text-center">
                {urgencyString}
              </td>
              <td className="border-collapse border border-4 text-center">
                {report.vote}
              </td>
              <td className="border-collapse border border-4">
                <span onClick={() => props.markdoneHandler(report._id)}>
                  Mark done!
                </span>
                <span onClick={() => props.deleteHandler(report._id)}>
                  Delete
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
