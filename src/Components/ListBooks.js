import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class ListBooks extends Component {
    render() {
      const books = this.props.books;
      const updateShelf = this.props.updateShelf;
      const currentlyReadingBooks = books.filter(book => {
        return book.shelf === 'currentlyReading';
      });
      const wantToReadBooks = books.filter(book => {
        return book.shelf === 'wantToRead';
      });
      const readBooks = books.filter(book => {
        return book.shelf === 'read';
      });

      return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BookShelf books={currentlyReadingBooks} updateShelf={updateShelf} title="Currently Reading"/>
              <BookShelf books={wantToReadBooks} updateShelf={updateShelf} title="Want to Read"/>
              <BookShelf books={readBooks} updateShelf={updateShelf} title="Read"/>
            </div>
          </div>
          <div className="open-search">
            <Link to="/search" onClick={() => this.setState({ showSearchPage: true })}>Add a book</Link>
          </div>
        </div>
      )
    }
}

export default ListBooks