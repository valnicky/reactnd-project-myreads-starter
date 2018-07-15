This project is for Udacity's Front End Development nanodegree program - Project 7, My Reads App.

# MyReads Project

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

* Currently Reading
* Want to Read
* Read

Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. Note that the default value for the control should always be the current shelf the book is in.

The main page also has a link to /search, a search page that allows you to find books to add to your library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library. To keep the interface consistent, you may consider re-using some of the code you used to display the books on the main page.

The search page also has a link to / (the root URL), which leads back to the main page.

When you navigate back to the main page from the search page, you should instantly see all of the selections you made on the search page in your library.


## Prerequisites

* [npm](https://www.npmjs.com/)

If you have Node installed, you have NPM, if not install node:

* [Node](https://nodejs.org/en/)

## Installing

To get started developing right away:

* install all project dependencies with 
```npm install```
* start the development server with 
```npm start```

Which will open a new browser window pointed to localhost:3000 where you can start interacting with the app.
