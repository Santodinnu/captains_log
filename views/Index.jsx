import React from "react";

export default function Index({ logs }) {
  return (
    <div>
      <nav>
        <a href="/logs/new">Create a new Log</a>
      </nav>
      <h1>Index Page</h1>
      <ul>
        {logs.map((log, i) => (
          <li key={i}>
            The <a href={`/logs/${log._id}`}>{log.title}</a> is {fruit.color}{" "}
            <br></br>
            {log.shipIsBroken ? `Ship is broken` : `Ship is not broken`}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}