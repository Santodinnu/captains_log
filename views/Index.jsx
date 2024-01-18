import React from "react";

export default function Index({ logs }) {
  return (
    <div>
      <nav>
        <a href="/logs/new">Add New Log</a>
      </nav>
      <h1>Index Page</h1>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>
            The <a href={`/logs/${log._id}`}>{log.title}</a>{" "}
            <br></br>
            {log.shipIsBroken ? `Ship is broken` : `Ship is not broken`}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}