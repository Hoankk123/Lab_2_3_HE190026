import React, { useState, useMemo, useRef, useEffect, useContext } from 'react'; 
import { ThemeProvider, ThemeContext } from './context/ThemeContext'; 
import { useLocalStorage } from './hooks/useLocalStorage';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import { movies as initialMovies } from './datas/movies';
import './App.css';

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

function MainApp() {
  const { darkMode } = useContext(ThemeContext);

  const [keyword, setKeyword] = useState('');
  const [genre, setGenre] = useState('Tat ca the loai');
  const [sort, setSort] = useState('Mac dinh');
  
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [favorites, setFavorites] = useLocalStorage('movie_favorites', []);

  const searchRef = useRef(null);
  
  useEffect(() => {
    if (searchRef.current) searchRef.current.focus();
  }, []);

  const finalMovies = useMemo(() => {
    let result = [...initialMovies];
    if (keyword) result = result.filter(m => m.title.toLowerCase().includes(keyword.toLowerCase()));
    if (genre !== 'Tat ca the loai') result = result.filter(m => m.genre === genre);
    if (sort === 'Rating: Cao -> Thap') result.sort((a, b) => b.rating - a.rating);
    else if (sort === 'Rating: Thap -> Cao') result.sort((a, b) => a.rating - b.rating);
    return result;
  }, [keyword, genre, sort]);

  const handleToggleFav = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <div className={`app-container ${darkMode ? 'dark' : '' }`}>
      <Header />
      <div className="dashed-line"></div>
      
      <div className="main-layout">
        <div className="left-column">
          <div style={{ marginBottom: '15px' }}>
            <input 
              ref={searchRef}
              type="text" 
              placeholder=" Tim ten phim................. " 
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              style={{ width: '60%' }}
            />
          </div>

          <div style={{ display: 'flex', gap: '20px', marginBottom: '15px' }}>
            <select value={genre} onChange={(e) => setGenre(e.target.value)}>
              <option value="Tat ca the loai"> Tat ca the loai  </option>
              <option value="Action">Action</option>
              <option value="Animation">Animation</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Sci-Fi">Sci-Fi</option>
            </select>

            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="Mặc định">Sap xep: Mac dinh </option>
              <option value="Rating: Cao -> Thap">Rating: Cao -> Thap</option>
              <option value="Rating: Thap -> Cao">Rating: Thap -> Cao</option>
            </select>
          </div>

          <div className="dashed-line"></div>

          <div style={{ fontSize: '0.9em', marginBottom: '15px' }}>
            Tong: {initialMovies.length} | Yeu thich: {favorites.length} | Dang hien thi: {finalMovies.length}
          </div>

          <MovieList 
            movies={finalMovies} 
            favorites={favorites} 
            toggleFav={handleToggleFav} 
            onViewDetail={setSelectedMovie} 
          />
        </div>

        <MovieDetail 
          movie={selectedMovie} 
          onClose={() => setSelectedMovie(null)} 
        />
      </div>
    </div>
  );
}