import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
            <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>{" "}
            Edit
          </button>{" "}
          <button
            className="btn btn-danger"
            onClick={() => props.delete(props.data.id)}>
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>{" "}
            Hapus
          </button>
        </td>
      </tr>
    </>
  )
}
