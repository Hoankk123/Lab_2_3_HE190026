import React from 'react';

export default function GenreFilter({ genre, setGenre, sort, setSort }) {
  return (
    <div style={{ marginBottom: '15px' }}>
      <label>Genre: </label>
      <select value={genre} onChange={(e) => setGenre(e.target.value)} style={{ marginRight: '20px' }}>
        <option value="All Genres">All Genres</option>
        <option value="Action">Action</option>
        <option value="Animation">Animation</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
        <option value="Romance">Romance</option>
        <option value="Sci-Fi">Sci-Fi</option>
      </select>

      <label>Sort by: </label>
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="Default">Default</option>
        <option value="Rating: High -> Low">Rating: High → Low</option>
        <option value="Rating: Low -> High">Rating: Low → High</option>
      </select>
    </div>
  );
}