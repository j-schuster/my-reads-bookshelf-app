import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import Search from './Search'
import './App.css'

class BooksApp extends React.Component {
  
    state = {
    books: [],
    showSearchPage: false,
    searchResults: []
    }

  showSearchPage = () => {
    this.setState({showSearchPage: true})
  }

  backToApp = () => {
    this.setState({showSearchPage: false})
  }

  componentDidMount = () => {
     this.getAllBooks() 
  }

  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
        this.setState({books: books})
      })
  }

  changeShelf =(shelf, book) => {
    BooksAPI.update(book,shelf).then((data)=>{
        book.shelf = shelf;
        this.setState({books: this.state.books.filter((b) => b.id !== book.id).concat(book)})
    }) 
  }
 

  render() {
 
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <Search backToApp={this.backToApp} updateSearch={this.updateSearch} changeShelf={this.changeShelf} books={this.state.books}/>
        )}/>
         
        <Route exact path="/" render={() => (
          <ListBooks books={this.state.books} showSearchPage={this.showSearchPage} changeShelf={this.changeShelf}/>
        )}/>  
      </div>
    )
  }
}
 
export default BooksApp