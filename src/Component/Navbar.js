import React, { useState } from 'react';

function Navbar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="navbar">
        {/* <p>KeazoNBOOKS</p> */}
      <input
        type="text"
        placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Navbar;