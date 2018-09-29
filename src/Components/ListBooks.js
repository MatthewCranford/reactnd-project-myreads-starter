import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

function ListBooks (props) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf books={props.books} onUpdateShelf={props.onUpdateShelf} title="Currently Reading" shelf="currentlyReading"/>
          <BookShelf books={props.books} onUpdateShelf={props.onUpdateShelf} title="Want to Read" shelf="wantToRead"/>
          <BookShelf books={props.books} onUpdateShelf={props.onUpdateShelf} title="Read" shelf="read"/>
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  )
}

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  onUpdateShelf: PropTypes.func.isRequired
}

export default ListBooks