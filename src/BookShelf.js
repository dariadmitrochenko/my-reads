import React, { Component } from 'react'
import Book from './Book'

      
class BookShelf extends Component {
  render () {
    return (
     <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
      {this.props.books.filter(filteredBook => filteredBook.shelf === 'currentlyReading').map(book =>
        <ol key={book.id} className="books-grid">
        <li><Book book={book}/></li>
        </ol>
    )}
     </div>
      
      <h2 className="bookshelf-title">Want To Read</h2>
      <div className="bookshelf-books">
      {this.props.books.filter(filteredBook => filteredBook.shelf === 'wantToRead').map(book =>
        <ol key={book.id} className="books-grid">
        <li><Book book={book}/></li>
        </ol>
    )}
     </div>
      
      <h2 className="bookshelf-title">Read</h2>
      <div className="bookshelf-books">
      {this.props.books.filter(filteredBook => filteredBook.shelf === 'read').map(book =>
        <ol key={book.id} className="books-grid">
        <li><Book book={book}/></li>
        </ol>
    )}
     </div>

      
    </div>
      
    )
  }
}

export default BookShelf