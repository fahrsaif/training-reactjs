import axios from 'axios';
import React, { Component } from 'react'
import { Button, Card, Container } from 'react-bootstrap';
import { Zoom } from 'react-reveal'

export default class Blog extends Component {
  state = {
    post: []
  }

  componentDidMount() {
    // using native javascript
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then((response) => response.json())
    //   .then((json) => this.setState({
    //     post: json
    //   }));

    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response => {
        this.setState({
          post: response.data
        })
      }));
  }

  render() {
    return (
      <>
        <Container>
          {this.state.post.map(data => {
            return (
              <Zoom>
                <Card key={data.id} style={{ width: '18rem' }} className="mt-5">
                  <Card.Img variant="top" src="placeimg_640_480_nature.jpg" />
                  <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>{data.body}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Zoom>
            )
          })}
        </Container>
      </>
    )
  }
}
