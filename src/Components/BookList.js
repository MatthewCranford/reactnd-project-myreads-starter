import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class BookList extends Component {
    render() {
      const books = this.props.books;

      return (
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf books={books.filter(book => {book.shelf === 'currentlyReading'})} title="Currently Reading"/>
            <BookShelf books={books} title="Want to Read"/>
            <BookShelf books={books} title="Read"/>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search" onClick={() => this.setState({ showSearchPage: true })}>Add a book</Link>
        </div>
      </div>
      )
    }
}

export default BookList