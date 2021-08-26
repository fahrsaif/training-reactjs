import React from 'react'

export default function Listitem(props) {
  return (
    <>
      <tr>
        <td>{props.data.id}</td>
        <td>{props.data.nama}</td>
        <td>{props.data.harga}</td>
        <td>{props.data.deskripsi}</td>
        <td align="center">
          <button
            className="btn btn-warning"
            onClick={() => props.update(props.data)}>
            Edit
          </button>{" "}
          <button
            className="btn btn-danger"
            onClick={() => props.delete(props.data.id)}>
            Hapus
          </button>
        </td>
      </tr>
    </>
  )
}
