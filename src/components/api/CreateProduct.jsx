import axios from 'axios';
import React, { Component } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Listitem from './Listitem'
import TableData from './TableData'

export default class CreateProduct extends Component {
  state = {
    dataProducts: [],
    formProduct: {
      id: 6,
      nama: "",
      harga: "",
      deskripsi: "",
    }
  };

  // API
  getProduct = () => {
    axios
      .get("http://localhost:3004/products")
      .then(response => {
        this.setState({
          dataProducts: response.data
        })
      })
  }

  deleteProduct = (id) => {
    axios
      .delete(`http://localhost:3004/products/${id}`)
      .then(response =>
        this.getProduct()
      )
  }

  updateProduct = (data) => {
  }

  setFormProduct = (e) => {

  }

  addProduct = (e) => {
    axios
      .post("http://localhost:3004/products", this.state.formProduct)
      .then(response => {
        console.log(response);
      })
  }

  componentDidMount() {
    this.getProduct()
  }

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col md={4}>
              <h5 className="mt-3">Form Tambah Produk</h5>
              <hr />
              <div className="form-group mt-2">
                <label htmlFor="nama">Nama</label>
                <input
                  type="text"
                  className="form-control mt-2"
                  name="nama"
                  onChange={this.setFormProduct} />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="harga">Harga</label>
                <input
                  type="text"
                  className="form-control mt-2"
                  name="harga"
                  onChange={this.setFormProduct} />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="deskripsi">Deskripsi</label>
                <textarea
                  name="deskripsi"
                  cols="30"
                  rows="5"
                  className="form-control mt-2">

                </textarea>
              </div>
              <Button variant="primary" type="submit" className="mt-3" onClick={this.addProduct}>Tambah</Button>
            </Col>
            <Col md={8}>
              <TableData>
                {this.state.dataProducts.map((dataProduct, index) => {
                  return (
                    <Listitem
                      key={index}
                      data={dataProduct}
                      // function
                      delete={this.deleteProduct}
                      update={this.updateProduct}
                    />
                  )
                })}
              </TableData>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}
