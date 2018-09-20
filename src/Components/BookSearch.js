import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book.js'


class BookSearch extends Component {
  state = {
    searchedBooks: [],
    query: ''
  }

  showBook = (e) => {
    console.log('Input:', e.target.value);
    this.props.searchBook(e.target.value);
  }

  searchBooks = query => {

    if (query) {
      console.log('query',query);
      BooksAPI.search(query).then((books) => {
        console.log('result', books);
        this.setState({ searchedBooks: books }, () => console.log('state:', this.state));
        console.log(this.state.books);
      });
    }

  }
  
  render() {
    return (
      <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</Link>
        <div className="search-books-input-wrapper">
          <input 
            type="text" 
            placeholder="Search by title or author"
            onChange={event => this.searchBooks(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {this.state.searchedBooks.length > 0 && this.state.searchedBooks.map((book, index) => (
          <Book book={book} key={index}/>
          ))}
        </ol>
      </div>
      </div>
    )
  }
}
export default BookSearch