import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import "../pages/books.css";

class Books extends Component {
  state = {
    search: "",
    books: []
  };

  handleInputChange = event => {
    this.setState({search: event.target.value})
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  }

  componentDidMount() {
    this.searchBooks();
  }

  searchBooks = (query) => {
    API.search(query)
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <strong><h1>Google Book Search</h1></strong>
              <h5>-React Edition-</h5>
            </Jumbotron>
            
          </Col>
          <Col size="md-3 sm-1">
          <form>
              <h1>Book Search</h1>
              <Input name="search" onChange={this.handleInputChange} placeholder="Title (required)" />
              <FormBtn onChange={this.handleFormSubmit}>Submit Book</FormBtn>
            </form>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <a href={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </a>
                    <DeleteBtn />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3></h3>
            )}
            </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;

