import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component {

  state = {
    isLoading: true,
    movies: [],
  };

  //async, await를 사용해서 데이터를 받아올때까지 기다리도록 함
  getMovies = async () => {

    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    //setState를 활용해서 state 값을 설정함
    this.setState({ movies, isLoading: false });

  };

  //render() 뒤에 실행됨
  componentDidMount() {
    // 영화 데이터 로딩!
    this.getMovies();
  }

  render() {

    const { isLoading, movies } = this.state;

    return (
      <section class = "container">
        {isLoading ? (
          <div class = "loader">
            <span class = "loader__text">'Loading...'</span>
          </div>
        ) : (
          <div class = "movies">
            {
              movies.map((movie) => (
                  <Movie
                    key = {movie.id}
                    id = {movie.id}
                    year = {movie.year}
                    title = {movie.title}
                    summary = {movie.summary}
                    poster = {movie.medium_cover_image}
                  />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;