import React from "react";

export default function New() {
  return (
    <div>
      <h1>New Page</h1>
      <form action="/logs" method="POST">
        Title: <input type="text" name="title" />
        <br /><br />
        Entry: <input type="textarea" name="entry" />
        <br /><br />
        Is the Ship broken: <input type="checkbox" name="shipIsBroken" />
        <br /><br />
        <button>Create Log</button>
      </form>
    </div>
  );
}