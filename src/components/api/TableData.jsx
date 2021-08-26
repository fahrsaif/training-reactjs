import React from 'react'
import { Table } from 'react-bootstrap'

export default function TableData(props) {
  return (
    <div>
      <h5 className="mt-3">Table Data</h5>
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nama Produk</th>
            <th>Harga</th>
            <th>Deskripsi</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.children}
        </tbody>
      </Table>
    </div>
  )
}