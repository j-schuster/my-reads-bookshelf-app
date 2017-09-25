import React from 'react'
import { Link } from 'react-router-dom' 
import * as BooksAPI from './BooksAPI'


class Search extends React.Component {
 constructor(props){
  super(props);
  this.state = {
    query : '',
    books : [],
   loadng : true
  }
  this.updateSearch = this.updateSearch.bind(this)
  this.handleClick  = this.handleClick.bind(this)
  this.updateBooks  = this.updateBooks.bind(this) 
  this.getInput     = this.getInput.bind(this)
  
 }


 getInput(e){
    this.setState({query: e.target.value})
    this.updateSearch(this.state.query)   
 }
 
 updateSearch = (query) => {
   if(query.length > 1){
      BooksAPI.search(query, 20).then(data => {
       
        this.setState({books : data})
        this.updateBooks(data)
      })
    }else{
      this.setState({books: []})
    }
  }

updateBooks(books){
const searchBooks = []
for(let i = 0; i < books.length; i++){
  searchBooks.push(books[i])
}
let updatedBooks = searchBooks.map(book => {
       book.shelf = 'none'

       this.props.books.forEach(bookInColl => {
          if(book.id === bookInColl.id){
           book.shelf = bookInColl.shelf
        }  
    });
  return book;
})
  this.setState({books : updatedBooks})
}


handleClick(e, book){
    let self = this;
    self.props.changeShelf(e, book)
  }  

render() {
 const results =  this.state.books  
 const searchedBooks = []
 for(let i = 0; i < results.length; i++){
   searchedBooks.push(results[i])
 }

      return( 
            <div>  
              <div className="search-books">
               <div className="search-books-bar">
                <Link to="/" className="close-search">Close</Link>
                 <div className="search-books-input-wrapper">
                  <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.getInput}/>
                </div>
              </div>
              <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
          {this.state.query.length > 0 ? <p className="display-results">displaying {searchedBooks.length} results</p> : null}
          <ol className="books-grid">
            {searchedBooks.map((book) => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                      <div className="book-shelf-changer">
                        <select defaultValue={book.shelf} onChange={(e) => this.handleClick(e.target.value, book)}>
                          <option value="none" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                  <div className="book-title">{book.authors}</div>
                <div className="book-authors">{book.title}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    )
  } 
} 

export default Search