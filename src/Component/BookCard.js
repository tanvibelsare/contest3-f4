import React from 'react';

function BookCard({ book }) {
  const { volumeInfo } = book;

  return (
    <div className="book-card">
      <img src={volumeInfo.imageLinks.thumbnail} alt={volumeInfo.title} />
      {/* <h3>{volumeInfo.title}</h3>
      <p>{volumeInfo.authors && volumeInfo.authors.join(', ')}</p> */}
    </div>
  );
}

export default BookCard;