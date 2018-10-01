import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'

class BookSearch extends Component {
  static propTypes = {
    onUpdateShelf: PropTypes.func.isRequired
  }

  state = {
    query: '',
    showingBooks: []
  }

  updateQuery = (query) => {
    this.setState({ query: query }, () => {
      this.searchBooks(this.state.query.trim());
    });
  }

  searchBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then((books) => {
        if (books.length > 0) {
          books = books.filter((book) => book.imageLinks).map((book) =>  {
            if(!book.shelf) {
              book.shelf = 'none';
            }
            return book;
          });
          this.setState({ showingBooks: books });
        }
        else {
          this.setState({ showingBooks: [] });
        }
      });
    }
    else {
      this.setState({ showingBooks: [] });
    }
  }
  
  render() {
    const { onUpdateShelf } = this.props;
    const { query, showingBooks } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</Link>
          <div className="search-books-input-wrapper">
            <input 
              type="text" 
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {showingBooks.map((book, index) => (
            <Book 
              book={book} 
              key={index} 
              onUpdateShelf={onUpdateShelf}
            />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookSearch