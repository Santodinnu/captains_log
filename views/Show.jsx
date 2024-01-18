import React from 'react'

export default function Show({log}) {
    return (
        <div>
            <h1>Show Page</h1>
            <h2>{log.title}</h2>
            <p>{log.entry}</p>
        <p>{log.shipIsBroken ? "Ship broke..." : "Ship is not broken yet"}</p>
        <a href={`/logs/${log._id}/edit`}><button>Edit</button></a>
        <br />

        <form action={`/logs/${log._id}?_method=DELETE`} method='POST'>
            <button>Delete</button>
        </form>
    </div>
  )
}