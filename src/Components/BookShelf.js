import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
  
  render() {
    const books = this.props.books;
    const updateShelf = this.props.updateShelf;
    const title = this.props.title;
    const shelf = this.props.shelf


    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.filter(book => book.shelf === shelf).map((book, index) => (<Book book={book} key={index} updateShelf={updateShelf}/>))}
          </ol>
        </div>
      </div>
    )
  }
}
export default BookShelf