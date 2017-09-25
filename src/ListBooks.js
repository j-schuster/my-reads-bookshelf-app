import React from 'react'
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom' 

class ListBooks extends React.Component {
  render() {
    return(
       <div className="list-books">
          <div className="list-books-title">
              <h1>My Reads</h1>
          </div>
          <div className="list-books-content">
              <Bookshelf books={this.props.books} changeShelf={this.props.changeShelf}/>
          </div>
          <div className="open-search">
             <Link to="/search">Add a book</Link>
          </div>
      </div>
    );
  }
}

export default ListBooks

/*
onClick={() => this.props.showSearchPage()}
*/