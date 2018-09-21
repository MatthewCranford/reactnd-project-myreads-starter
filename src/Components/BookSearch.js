import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book.js'


class BookSearch extends Component {
  state = {
    searchedBooks: []
  }

  searchBooks = (query) => {
    if (query) {
      console.log('query',query);
      BooksAPI.search(query).then((books) => {
        if (books.length > 0) {
          console.log('result', books);
          const filteredBooks = books.filter((book) => (book.imageLinks));
          this.setState({ searchedBooks: filteredBooks });
        }
        else {
          this.setState({ searchedBooks: [] });
        }
      });
    }
    else {
      console.log('no query:',query);
      this.setState({ searchedBooks: [] });
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
          {this.state.searchedBooks.map((book, index) => (
          <Book book={book} key={index }/>
          ))}
        </ol>
      </div>
      </div>
    )
  }
}
export default BookSearch