import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class BookSearch extends Component {

  showBook = (e) => {
    console.log('Input:', e.target.value);
    this.props.searchBook(e.target.value);
  }
  
  render() {
    return (
      <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" onChange={this.showBook}/>
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