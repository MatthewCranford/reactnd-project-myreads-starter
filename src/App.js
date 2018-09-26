import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './Components/ListBooks'
import BookSearch from './Components/BookSearch'

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
          <ListBooks books={this.state.books} onUpdateShelf={this.updateShelf}/>
        )}/>
        <Route path="/search" render={() => (
          <BookSearch books={this.state.books} onUpdateShelf={this.updateShelf}/>
        )}/>
      </div>
    )
  }
}
export default BooksApp
