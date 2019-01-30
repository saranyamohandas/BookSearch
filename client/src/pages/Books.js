import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import CardItem  from "../components/List";
import { Input, FormBtn } from "../components/Form";
import "../pages/books.css";

class Books extends Component {
  state = {
    search: "",
    books : [],
    savedBooks : [],
    saved : false
  };

  handleInputChange = event => {
    // console.log(event.target.value)
    // console.log(this.state.search)
    const name = event.target.name;
    const value = event.target.value;
    //this.setState({search: event.target.value})
    this.setState({[name]: value});
    console.log(this.state.search)
  }

  handleFormSubmit = event => {
    event.preventDefault();
    //console.log("form submit",this.state.search)
    //this.setState({search: event.target.value})
    console.log("inside handleformsubmit")
    this.searchBooks(this.state.search);

  }

  // componentDidMount() {
  //   this.searchBooks();
  // }
  handleSavedBooks = (id) => {

    this.setState({saved:true})






  }
  searchBooks = (query) => {
    console.log("form submit - ",query);
    API.search(query)
      .then(res => { 
         console.log("response",res.data.items);
          this.setState({ books: res.data.items })
        // console.log(this.state.books))
      })
       
       
      .catch(err => console.log(err));
      //console.log(this.state.books));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <strong><h1>Book REACTion</h1></strong>
              <h2></h2>
              
            </Jumbotron>
            
          </Col>
          <Col size="md-3 sm-1">
          <form>
              <h1>Search</h1>
              <Input name="search" onChange={this.handleInputChange} placeholder="Title (required)" />
              <button onClick={this.handleFormSubmit}>Submit Book</button>
            </form>
          </Col>
        </Row>
        
        <div>
          
           {this.state.books.map(book => (
             <CardItem  key={book.id} title={book.volumeInfo.title} description={book.volumeInfo.description} image={book.volumeInfo.imageLinks} saved={this.state.saved}/>
            
            //console.log("title",book.title)

           
           
            ))}
          
        </div>
     
      </Container>
    );
  }
}

export default Books;

