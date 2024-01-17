import React from "react";

export default function Edit({ log, index }) {
  return (
    <div>
      <h1>Edit Page</h1>
      <form action={`/logs/${log._id}?_method=PUT`} method="POST">
      Title: <input type="text" name="title" defaultValue={log.title} />
        <br /><br />
        Entry: <input type="textarea" name="entry"  defaultValue={log.entry} />
        <br /><br />
        Is the Ship broken: <input type="checkbox" name="shipIsBroken" defaultChecked={log.shipIsBroken} />
        <br /><br />
        <button>Update Log</button>
      </form>
    </div>
  );
}