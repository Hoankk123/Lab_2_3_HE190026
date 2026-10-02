import React from 'react';

export default function MovieItem({ movie, isFav, toggleFav, onViewDetail }) {
  return (
    <div className="movie-item">
      <div className="movie-item-top">
        <span>{isFav ? '[Thich]' : '[Không thich]'} {movie.title}</span>
        <span>| {movie.genre} | {movie.year} | [Đanh gia] {movie.rating}</span>
      </div>
      <div className="movie-item-actions">
        <button onClick={() => toggleFav(movie.id)}>
          {isFav ? 'Bo thich' : 'Yeu thich'}
        </button>
        <button onClick={() => onViewDetail(movie)}>
          Chi tiet
        </button>
      </div>
    </div>
  );
}