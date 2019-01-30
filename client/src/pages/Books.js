import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import CardItem  from "../components/List";
import SavedItem  from "../components/List";
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
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value});
    console.log(this.state.search)
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("inside handleformsubmit")
    this.searchBooks(this.state.search);

  }

  
  handleSavedBooks = ((id) => {
    console.log("handle saved books triggered for ",id);
    //make a shallow copy of this.state.books and set true to saved book

    const currBooks = [...this.state.books];
    currBooks.forEach((book) => {
      if(book.id == id) {
        console.log("id",id);
        //console.log(book.saved)
        book.saved = true;
        const bookData = {title : book.title,author: "hardcoded"}
        API.saveBook(bookData).then((res) => {
          console.log("book posted")

        })

      }
    });
    //this.setState({books: currBooks})
    //const updatedBooks = this.state.books.filter((book)=> book.id !== id)
    //filter the unsaved books and pass to list component
    const unsavedBooks = currBooks.filter((book)=> !book.saved)
    // console.log("updatedBooks",updatedBooks);
    console.log("unsaved",unsavedBooks)
     this.setState({books: unsavedBooks})

    })

      // test this
      
     // this.setState({books: updatedBooks})
       //console.log(this.state.books)
    //    console.log("updatedBooks",updatedBooks);
    // })

//     console.log("updatedBooks",updatedBooks);
// })

  saveToDB = (id) => {
    this.state.books.forEach((book) => {
      if(id===book.id){
        const bookData = {title : book.title,author: "hardcoded"}
        API.saveBook(bookData).then((res) => {
          console.log("book posted")

        })
      }
    })
  }

  searchBooks = (query) => {
    console.log("form submit - ",query);
    API.search(query)
      .then(res => { 
         console.log("response",res.data.items);
         let books = res.data.items;
         // books.map((book)=>{
         //  book.saved = false;
         // })
         books.map((book)=>{
          book.saved = false;
          })

          //this.setState({ books: res.data.items })
          this.setState({ books: books })
        
      }).catch(err => console.log(err));
      
  };

  render() {
    //let unsaved = {this.state.books.filter((book) => {return(book.saved)} )}
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
              <button onClick={this.handleFormSubmit}>Submit Book</button>
            </form>
          </Col>
        </Row>
        
        <div>
          { /* {this.state.books.filter((book) => } */}
           {this.state.books.map(book => (
             <CardItem  key={book.id} id={book.id} title={book.volumeInfo.title} description={book.volumeInfo.description} saved={book.saved} onClick={this.handleSavedBooks}/>
            
            ))}
          
        </div>
     
      </Container>
    );
  }
}

export default Books;

