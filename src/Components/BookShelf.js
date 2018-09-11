import React, { Component } from 'react'

class BookShelf extends Component {
    render() {
        const books = this.props.books;
        const title = this.props.title;

        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.books.filter(book => book.shelf === 'currentlyReading').map(book => (
                <li>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                      <div className="book-shelf-changer">
                        <select onChange={(e) => this.changeShelf(book,e)}>
                          <option value="move" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors.map(author => author).filter(authors => authors.length > 1)}</div>
                  </div>
                </li>
                ))}
              </ol>
            </div>
          </div>
        )
    }
}

export default BookShelf