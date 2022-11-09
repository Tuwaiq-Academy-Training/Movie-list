import { useEffect, useState } from 'react';
import './App.css';
import Movie from './components/Movie';
import Search from './components/Search';

const API_KEY = '7d871d91';

const App = () => {
  const [movieName, setMovieName] = useState('');
  const [movieList, setMovieList] = useState([]);

  const getMovieList = async () => {
    const request = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${movieName}`
    );
    const data = await request.json();
    if (data.Response === 'False') {
      alert('Wrong movie name');
      return;
    }
    setMovieList(data.Search);
    setMovieName('');
  };

  useEffect(() => {
    const getFirstMovieList = async () => {
      const request = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=all&type=movie`
      );
      const data = await request.json();
      setMovieList(data.Search);
      console.log(data);
    };
    getFirstMovieList();
  }, []);

  return (
    <div className='container'>
      <div className='row col'>
        <h1 className='mt-5 text-center'>Moive List</h1>
      </div>
      <Search
        onClick={getMovieList}
        movieName={movieName}
        setMovieName={setMovieName}
      />
      <div className='row row-cols-3 mt-5'>
        {movieList.map((movie) => {
          return (
            <Movie
              key={movie.imdbID}
              imgSrc={movie.Poster}
              year={movie.Year}
              title={movie.Title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
