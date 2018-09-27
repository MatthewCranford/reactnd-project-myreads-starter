import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book.js'


class BookSearch extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateShelf: PropTypes.func.isRequired
  }

  state = {
    searchedBooks: []
  }

  searchBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then((books) => {
        if (books.length > 0) {
          books = books.filter((book) => (book.imageLinks)).map(book => {
            book.shelf = 'none';
            return book;
          });
          this.setState({ searchedBooks: books });
        }
        else {
          this.setState({ searchedBooks: [] });
        }
      });
    }
    else {
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
          <Book 
            book={book} 
            key={index} 
            onUpdateShelf={this.props.onUpdateShelf}
          />
          ))}
        </ol>
      </div>
      </div>
    )
  }
}

export default BookSearch