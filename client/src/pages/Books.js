import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid/";
import { List, ListItem } from "../components/List/";
import { Input, FormBtn } from "../components/Form/";
import SearchBtn from "../components/SearchBtn";
// import BookSearchForm from "../components/BookSearchForm/";

class Books extends Component {

    state = {
        books: [],
        search: ""
    }

    componentDidMount() {
        this.randomizeBooks()
        console.log("New version showing")
    }

    randomizeBooks = () => {
        API.randomBooks()
            .then(res => console.log(res))
    }


    searchBooks = query => {
        API.searchBooks(query)
            .then(res => 
                
                this.setState({
                    books: res.data.items
                }))
            .catch(err => console.log(err));
    }

    testState = () =>{
        console.log(this.state.books)
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    

    saveBook = (id) =>{
        console.log(this.state.books);
        var bookArray = this.state.books
        // var bookToSave = "";
        for(var i = 0; i < 10; i++) {
            // console.log(bookArray[i].volumeInfo);
            if (id === bookArray[i].id) {
                // console.log("The book to save is:" + JSON.stringify(bookArray[i].volumeInfo));
                var bookToSave = {
                    title: bookArray[i].volumeInfo.title,
                    description: bookArray[i].volumeInfo.description,
                    author: bookArray[i].volumeInfo.authors[0],
                    link: bookArray[i].volumeInfo.previewLink,
                    image: bookArray[i].volumeInfo.imageLinks.thumbnail
                };
                console.log("The book to save is: " + JSON.stringify(bookToSave));
                API.saveBook(bookToSave)
                    .then(res => console.log("You've saved this Book to your Books DB!"))
                    .catch(err => console.log(err));
            }
        }

        

    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("Book has been saved!");
        this.searchBooks(this.state.search)
    }


    render() {
        return ( 
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>Google Books React App!</h1>
                        </Jumbotron>
                        <form>
                            <h5>Search for a Book Here</h5>
                            <Input  
                                value={this.state.search}
                                onChange={this.handleInputChange}
                                name="search"
                                placeholder="Title (required)"
                                />
                            <SearchBtn onClick={this.handleFormSubmit}/>
                        </form>
                    </Col>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>Books You've Searched For</h1>
                        </Jumbotron>
                        {this.state.books.length ? (
                        <List>
                            {this.state.books.map(book => (
                                <ListItem key={book.id}>
                                    <h3>
                                    <strong>
                                        {book.volumeInfo.title} by {book.volumeInfo.authors}
                                    </strong></h3>
                                        <p>{book.volumeInfo.subtitle}</p>
                                        <a href={book.volumeInfo.previewLink}>View more</a>
                                    <button onClick={() => this.saveBook(book.id)}>Save book!</button>
                                </ListItem>
                            ))}

                        </List>

                         ) : ( 
                            <h3>No results yet, enter a search</h3>

                        )}

                    </Col>
                </Row>




            </Container>



        )
    }


}

export default Books;