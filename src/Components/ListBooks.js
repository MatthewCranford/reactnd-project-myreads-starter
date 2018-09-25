import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class ListBooks extends Component {
    render() {
      const books = this.props.books;
      const onUpdateShelf = this.props.onUpdateShelf;

      return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BookShelf books={books} onUpdateShelf={onUpdateShelf} title="Currently Reading" shelf="currentlyReading"/>
              <BookShelf books={books} onUpdateShelf={onUpdateShelf} title="Want to Read" shelf="wantToRead"/>
              <BookShelf books={books} onUpdateShelf={onUpdateShelf} title="Read" shelf="read"/>
            </div>
          </div>
          <div className="open-search">
            <Link to="/search" onClick={() => this.setState({ showSearchPage: true })}>Add a book</Link>
          </div>
        </div>
      )
    }
}

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  onUpdateShelf: PropTypes.func.isRequired
}

export default ListBooks