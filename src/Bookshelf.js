import React from 'react'


class Bookshelf extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }  


  handleClick(e, book){
    let self = this;
    self.props.changeShelf(e, book)
  }
  
  render(){
    const books = this.props.books;
    const currentlyReading = books.filter((books) => books.shelf === "currentlyReading")
    const wantToRead = books.filter((books) => books.shelf === "wantToRead")
    const read = books.filter((books) => books.shelf === "read")
    
  return(
      <div>
         <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {currentlyReading.map((book) => (
                    <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                          <select value={book.shelf} onChange={(e) => this.handleClick(e.target.value, book)}>
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
          </div>

       <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {read.map((book) => (
                    <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                          <select value={book.shelf} onChange={(e) => this.handleClick(e.target.value, book)}>
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
          </div>

       <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {wantToRead.map((book) => (
                    <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                          <select value={book.shelf} onChange={(e) => this.handleClick(e.target.value, book)}>
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
          </div>
      </div> 
    );
  }
}

export default Bookshelf