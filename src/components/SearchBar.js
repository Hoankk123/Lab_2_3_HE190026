import React, { useRef, useEffect } from 'react';

export default function SearchBar({ keyword, setKeyword }) {
  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current.focus(); 
  }, []);

  return (
    <div style={{ margin: '10px 0' }}>
      <label>Search Movie: </label>
      <input 
        ref={searchRef}
        type="text" 
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Nhap ten phim..."
      />
    </div>
  );
}