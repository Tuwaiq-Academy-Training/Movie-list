import React from 'react';

const Movie = ({ imgSrc, title, year }) => {
  return (
    <div className='col mb-2'>
      <div className='card text-center'>
        <img src={imgSrc} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>
            {title} - {year}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Movie;
