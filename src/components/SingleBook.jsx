/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users.
 */

import { useState, useEffect } from 'react';

function SingleBook() {
  const [book, setBook] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Fetch book data from API
    fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/:bookId')
      .then(response => response.json())
      .then(data => setBook(data))
      .catch(error => console.log(error));
  }, []);

  const handleCheckout = () => {
    // Handle checkout logic
    console.log('Checkout button clicked');
  };

  return (
    <>
      <h1>Single Book Page</h1>
      {book && (
        <div>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <p>{book.description}</p>
          {loggedIn && <button onClick={handleCheckout}>Checkout</button>}
        </div>
      )}
    </>
  );
}

export default SingleBook;
