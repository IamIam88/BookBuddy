/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Books() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const AllBooks = async () => {
      try {
        const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books', {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log(response);
        const data = await response.json();
        setBooks(data.books);
      } catch (error) {
        console.error(error);
      }
    };

    AllBooks();
  }, []);
   

   const filteredBooks = books.filter((book) => {
     return book.title.toLowerCase().includes(searchTerm.toLowerCase());
   });

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  
  return (
    <>
      <h1>All Books Page</h1>
      <input type="text" value={searchTerm} onChange=
      {handleSearch} placeholder="Search books" />
      <div className='container'>
      {searchTerm ?
      filteredBooks.map((book) => (
        <div key={book.id} className='found'>
          <h2>{book.title}</h2>
          <p>Author: {book.author}</p>
          <img src={book.coverimage}/>
          <button className="button" onClick={() => navigate(`/books/${book.id}`)}>View Details</button>
        </div>
      )) :
      books.map((book) => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <p>Author: {book.author}</p>
          <img src={book.coverimage}/>
          <button className="button" onClick={() => navigate(`/books/${book.id}`)}>View Details</button>
        </div>
      ))}
      </div>
    </>
  );
}


export default Books;