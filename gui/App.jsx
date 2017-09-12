import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';

class App extends React.Component {
   constructor(props) {
     super(props);
   }

   render() {
      return (
        <div>
          <Header/>
          <Content/>
        </div>
      )
   }
}
export default App;

class Header extends React.Component {
  constructor(props) {
     super(props);
     this.state = {user: {'name': 'test user'}};
   }
  render() {
    return (
      <Grid>
        <Row className='show-grid'>
          <Col md={10}>Search Bar</Col>
          <Col md={2}>{this.state.user.name}</Col>
        </Row>
      </Grid>
    )
  }
}

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: [{'name': 'item 1'}]};
  }
  render() {
    var items = this.state.data.map((item) => <ListGroupItem>{item.name}</ListGroupItem>);
    return (
      <ListGroup>{items}</ListGroup>
    );
  }
}
