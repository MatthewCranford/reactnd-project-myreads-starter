import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book.js'

class BookSearch extends Component {
  static propTypes = {
    onUpdateShelf: PropTypes.func.isRequired
  }

  state = {
    query: '',
    showingBooks: []
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() }, () => {
      this.searchBooks(this.state.query);
    });
  }

  searchBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then((books) => {
        if (books.length > 0) {
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