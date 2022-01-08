import React from 'react';
import propTypes from 'prop-types';

const movie_list = [
  {
    id: 1,
    name: 'forest gump',
    image: 'https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'joje',
    image: 'https://w.namu.la/s/4007807a1c370b447455a9c957da64fafb7b753cdd70a9529cac8a0348cb5a445278bab57fb017be153c1ef9ca323ba483c8235f0a61398f25fdf07a5802800d68b0369e5d7277b0386d01ce5aa993f1b0c81fc51922bed5e8fbb6a739292cbb',
    rating: 4.9,
  }
];

function Movie( { movie_name, picture, rating } ) {
  return (
    <div>
      <h1>I like { movie_name }</h1>
      <h3>{ rating }</h3>
      <img src = { picture } alt = { movie_name } />
    </div>
  );
}

function App() {
  return (
  <div>
    {movie_list.map(
      data => (
        <Movie 
          key = {data.id} 
          movie_name = {data.name} 
          picture = {data.image}
          rating = {data.rating}
        />
      )
    )}
  </div>
  );
}

Movie.propTypes = {
  movie_name: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  rating: propTypes.number,
};

export default App;