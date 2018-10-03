import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'

class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
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

  
  // Receives a query string and perform and API search
  searchBooks = (query) => {
    // Query exists
    if (query) {
      BooksAPI.search(query).then((searchedBooks) => {
        // Search returns results
        if (searchedBooks.length > 0) {
          // Filter out searchedBooks that don't have thumbnail and then look for copies of books in the original books prop. If a match exists, take the shelf property of the book from main menu. Else set property to "none"
          searchedBooks = searchedBooks.filter((searchedBook) => searchedBook.imageLinks).map((searchedBook) =>  {
              for (let book of this.props.books) {
                if(book.id === searchedBook.id) {
                  searchedBook.shelf = book.shelf;
                  return searchedBook
                }
                else {
                  searchedBook.shelf = 'none';
                }
              }
            return searchedBook;
          });
          this.setState({ showingBooks: searchedBooks });
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

export default SearchBooks