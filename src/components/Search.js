import React from 'react';

const Search = ({ movieName, setMovieName, onClick }) => {
  return (
    <div className='row col'>
      <div class='input-group mt-5'>
        <input
          type='text'
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
          class='form-control '
          placeholder='Enter Movie Name'
        />
        <button onClick={onClick} class='btn btn-primary' type='button'>
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
