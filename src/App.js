import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './Components/BookList'
class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks = () => {
    BooksAPI.getAll().then((books) => {
      console.log('data', books);
      this.setState({ books });
    });
  }

  updateShelf = (book, shelf) => {
    console.log('book', book);
    console.log('e', shelf);
    BooksAPI.update(book, shelf).then(() => {
      this.fetchBooks();
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookList books={this.state.books} updateShelf={this.updateShelf}/>
        )}/>
        <Route path="/search" render={() => (
          <div className="search-books">
          <div className="search-books-bar">
            <Link to="/" className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</Link>
            <div className="search-books-input-wrapper">
              {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
              <input type="text" placeholder="Search by title or author"/>

            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
