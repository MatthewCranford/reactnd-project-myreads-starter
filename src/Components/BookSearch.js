import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class BookSearch extends Component {
  state = {
    books: [],
    query: ''
  }

  showBook = (e) => {
    console.log('Input:', e.target.value);
    this.props.searchBook(e.target.value);
  }

  changeQuery = (e) => {
    this.setState({ query: e.target.value }, () => console.log('state:', this.state));
    console.log(this.props.books);
  }
  
  render() {
    return (
      <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" onChange={this.changeQuery}/>
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
      </div>
    )
  }
}
export default BookSearch