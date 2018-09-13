import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
    render() {
        const books = this.props.books;
        const title = this.props.title;
        const changeShelf = this.props.changeShelf;

        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.map(book => (<Book changeShelf={changeShelf} book={book}/>))}
              </ol>
            </div>
          </div>
        )
    }
}

export default BookShelf