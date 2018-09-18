import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book.js'


class BookSearch extends Component {
  state = {
    books: [],
    query: ''
  }

  showBook = (e) => {
    console.log('Input:', e.target.value);
    this.props.searchBook(e.target.value);
  }

  changeQuery = (e) => {
    const searchQuery = e.target.value;
    this.setState({ query: e.target.value }, () => console.log('state:', this.state));
    this.searchBook(searchQuery);
  }

  searchBook = (query) => {
    console.log('query',query);
    BooksAPI.search(query).then((books) => {
      console.log('result', books);
      this.setState({ books })
    });
  }
  
  render() {
    return (
      <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" onChange={this.changeQuery}/>
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {this.state.books.map((book, index) => (
          <Book book={book} key={index}/>
          ))}
        </ol>
      </div>
      </div>
    )
  }
}
export default BookSearch