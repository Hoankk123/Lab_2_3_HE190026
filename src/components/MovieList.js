import React from 'react';
import MovieItem from './MovieItem';

export default function MovieList({ movies, favorites, toggleFav, onViewDetail }) {
  if (movies.length === 0) {
    return <p style={{ fontStyle: 'italic', color: 'gray' }}>Khong tim thay phim phu hop...</p>;
  }

  return (
    <div>
      {movies.map(movie => (
        <MovieItem 
          key={movie.id} 
          movie={movie} 
          isFav={favorites.includes(movie.id)}
          toggleFav={toggleFav}
          onViewDetail={onViewDetail}
        />
      ))}
    </div>
  );
}