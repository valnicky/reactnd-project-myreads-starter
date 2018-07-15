import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './Shelf'
import Search from './Search'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {

      state = {
      booksInfo: []
  }

  componentDidMount() { // Fetch data from API then add them to this.state.booksInfo
        BooksAPI.getAll().then((booksInfo) => {
        this.setState({booksInfo})
      })
  }


  shelfChange = (book, shelf) => {

    BooksAPI.update( book, shelf).then(() => {
       book.shelf = shelf
        this.setState((state) => ({
           booksInfo: state.booksInfo.filter((b) => ( // Filter all books as in current state in booksInfo
              b.id !== book.id
          )).concat(shelf !== 'none' ? [book]: []) //if the chosen shelf isn't 'none', concatenate the book to the right shelf array, if chosen shelf is 'none', concatenate empty array
      }))
    }) 
  }

  render() {
    const { booksInfo } = this.state;
    const { shelfChange } = this;
    const firstShelf = {
      title: "Currently Reading",
      shelf: "currentlyReading"
    }
    const secondShelf = {
      title: "Want To Read",
      shelf: "wantToRead"
    }
    const thirdShelf = {
      title: "Read",
      shelf: "read"
    }
    const shelvesInfo = [firstShelf, secondShelf, thirdShelf]
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
              {shelvesInfo.map((shelfInfo) => (
                <Shelf
                  shelfTitle = {shelfInfo.title}
                  booksOnShelf = {booksInfo.filter((book) =>
                   book.shelf === shelfInfo.shelf)}
                  shelfChange = {shelfChange}/>
              ))}
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )}/>

        <div className="search-books">
          <Route path="/search" render={() => (
            <Search
              shelfChange = {shelfChange}
              booksInfo = {this.state.booksInfo}/>
          )}
          />
        </div>

      </div>
    )
  }
}

export default BooksApp
                
                 /* NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md*/