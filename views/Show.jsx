import React from 'react'

export default function Show({ fruit, index }) {
    return (
        <div>
            <h1>Show Page</h1>
            The {log.title} is {log.entry}
            <br />
            {log.shipIsBroken ? `Ship is broken` : `Ship is not broken`}
            <br /><br />
            <a href={`/logs/${log._id}/edit`}>Edit</a>
            <br /><br />
            <form action={`/logs/${log._id}?_method=DELETE`} method='POST'>
                <button>Delete</button>
            </form>
        </div>
    )
}