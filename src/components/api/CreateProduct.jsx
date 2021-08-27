import { faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { Component } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Listitem from './Listitem'
import TableData from './TableData'

export default class CreateProduct extends Component {
  state = {
    dataProducts: [],
    formProduct: {
      id: "",
      nama: "",
      harga: "",
      deskripsi: "",
    },
    isUpdate: false
  };

  // API
  getProduct = () => {
    axios
      .get("http://localhost:3004/products")
      .then((response) => {
        this.setState({
          dataProducts: response.data
        })
      })
  }

  setFormProduct = (e) => {
    let formProductNew = { ...this.state.formProduct }
    formProductNew[e.target.name] = e.target.value

    if (!this.state.isUpdate) {
      formProductNew['id'] = new Date().getTime()
    }

    this.setState({
      formProduct: formProductNew
    })
  }

  addProduct = () => {
    axios
      .post("http://localhost:3004/products", this.state.formProduct)
      .then(() => {
        this.getProduct()
        this.setState({
          formProduct: {
            id: "",
            nama: "",
            harga: "",
            deskripsi: "",
          }
        })
      })
  }

  handleUpdate = (data) => {
    this.setState({
      formProduct: data,
      isUpdate: true
    })
  }

  updateProduct = () => {
    axios.put(
      `http://localhost:3004/products/${this.state.formProduct.id}`,
      this.state.formProduct
    ).then(() => {
      this.getProduct()
      this.setState({
        formProduct: {
          id: "",
          nama: "",
          harga: "",
          deskripsi: "",
        },
        isUpdate: false
      })
    })
  }

  handleSubmit = () => {
    if (this.state.isUpdate) {
      this.updateProduct()
    } else {
      this.addProduct()
    }
  }

  deleteProduct = (id) => {
    axios
      .delete(`http://localhost:3004/products/${id}`)
      .then(response =>
        this.getProduct()
      )
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
                  onChange={this.setFormProduct}
                  value={this.state.formProduct.nama} />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="harga">Harga</label>
                <input
                  type="text"
                  className="form-control mt-2"
                  name="harga"
                  onChange={this.setFormProduct}
                  value={this.state.formProduct.harga} />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="deskripsi">Deskripsi</label>
                <textarea
                  name="deskripsi"
                  cols="30"
                  rows="5"
                  className="form-control mt-2"
                  onChange={this.setFormProduct}
                  value={this.state.formProduct.deskripsi} >
                </textarea>
              </div>
              <Button
                variant="primary"
                type="submit"
                className="mt-3"
                onClick={this.handleSubmit}
              >
                <FontAwesomeIcon icon={faSave}></FontAwesomeIcon>{" "}
                Tambah
              </Button>
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
                      update={this.handleUpdate}
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
