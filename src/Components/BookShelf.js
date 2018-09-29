import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

function BookShelf (props) {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {props.books.filter(book => book.shelf === props.shelf).map((book, index) => (<Book book={book} key={index} onUpdateShelf={props.onUpdateShelf}/>))}
          </ol>
        </div>
      </div>
    )
}

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  onUpdateShelf: PropTypes.func.isRequired
}

export default BookShelf