/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SingleBook({token}) {

  const [book, setBook] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`, {
          headers: {
            'Content-Type': 'application/json'
          },
        });
        const data = await response.json();
        setBook(data.book);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBook();
  }, []);

  const handleCheckout = async () => {
    try {
      const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        method: 'PATCH',
        body: JSON.stringify({available : false})
      });
      const data = await response.json();
      setBook(data.book);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {book ? (
        <div>
          <h1>{book.title}</h1>
          <p>Author: {book.author}</p>
          <p>Description: {book.description}</p>
          <img src={book.coverimage}/>
          <p>Id: {book.id}</p>
          <p>Available?: {book.available ? 'Yes' : 'No'}</p>
          {book.available && <button onClick={handleCheckout}>Checkout</button>}
        </div>
      ) : (
        <p>Loading book details...</p>
      )}
    </>
  );
}

export default SingleBook;