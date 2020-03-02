import React from 'react'

const Table = (props) => (
    <tr key={props.data.id}>
        <td>{props.data.id}</td>
        <td>{props.data.fullname}</td>
        <td>{props.data.username}</td>
        <td>{props.data.city}</td>
    </tr>
)

export default Table