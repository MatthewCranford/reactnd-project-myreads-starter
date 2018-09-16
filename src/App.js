import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './Components/BookList'
import SearchBook from './Components/SearchBook'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  updateShelf = (book, shelf) => {
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
          <SearchBook/>
        )}/>
      </div>
    )
  }
}
export default BooksApp
