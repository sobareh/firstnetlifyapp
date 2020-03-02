import React, { Component } from 'react';
import axios from 'axios';
// import UserList from './components.js/UserList';
import Blog from './pages/Blog';
import './styles.css'
import {Container, Row, Col, Alert, Table} from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      dataApi:[]
    }
  }

  getUserList = () => (
    axios.get('http://localhost:8000/api/users')
      .then(res => {
        console.log(res)
        this.setState({
          dataApi:res.data
        })
     })
  )
  
  componentDidMount() {
    this.getUserList()
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(response => response.json())
    // .then(json => {
    //     this.setState({
    //       dataApi: json
    //   })
    // })
    // Axios.get('http://localhost:8000/api/users')
    //   .then(res => {
    //     console.log(res)
    //     this.setState({
    //       dataApi:res.data
    //     })
    //  })
    }

  render() {
    return (
      <div>
        <h1 className="text-center">Hello React</h1>
        <Blog dataApi={this.state.dataApi}/>
        <Container >
          <Row>
            <Col className="warna">1 of 2</Col>
            <Col className="warna">2 of 2</Col>
          </Row>
          <Row>
            <Col className="warna">1 of 3</Col>
            <Col className="warna">2 of 3</Col>
            <Col className="warna">3 of 3</Col>
          </Row>
          <br/>
          <Alert variant="success">
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
            <p>
              Aww yeah, you successfully read this important alert message. This example
              text is going to run a bit longer so that you can see how spacing within an
              alert works with this kind of content.
            </p>
            <hr />
            <p className="mb-0">
              Whenever you need to, be sure to use margin utilities to keep things nice
              and tidy.
            </p>
          </Alert>
          <br></br>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    )
  }
}

export default App;
