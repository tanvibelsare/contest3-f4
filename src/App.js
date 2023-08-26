
import React, { useState, useEffect } from 'react';
import Navbar from './Component/Navbar';
import BookList from './Component/Booklist';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async (query) => {
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
        const data = await response.json();
        

        setBooks(data.items);
        console.log(data.items)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData('Sherlock+Holmes'); // Fetch initial data
  }, []);

  

  return (
    <div className="App">
      <Navbar />
      <BookList books={books} />
    </div>
  );
}

export default App;