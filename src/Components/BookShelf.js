import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
  
  render() {
    const books = this.props.books;
    const title = this.props.title;
    const updateShelf = this.props.updateShelf;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book, index) => (<Book book={book} key={index} updateShelf={updateShelf}/>))}
          </ol>
        </div>
      </div>
    )
  }
}
export default BookShelf