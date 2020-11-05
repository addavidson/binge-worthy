import React from "react";
import $ from 'jquery';

class MovieDetails extends React.Component {

  constructor(props) {
    super();
    this.state = {
      movie: []
    }
    this.getMovieDetails()
}

    getMovieDetails () {
      let id = window.location.pathname.split('/')[3]
      console.log(window.location.pathname)
      console.log(id)

      $.ajax({
        url: `https://api.themoviedb.org/3/movie/${id}?api_key=c00408919006f902f07565fe44e7e2ad&language=en-US`,
        success: (response) => {
            console.log('Fetched data successfully');
            const movieDetails = response
            console.log(movieDetails)
            this.setState({
                movie: movieDetails
            })
        },
        error: (xhr, status, err) => {
            console.error('Failed to fetch data');
        }
      })
    }

  render() {
    return (
      <div className="movie-details" key={this.state.movie.id}>
        <div className="detail-card">
          <h2 className="detail-card--title">{this.state.movie.original_title}</h2>
          <div className="detail-card--main">
            <img className="detail-card--image" alt={this.state.movie.title} src={'https://image.tmdb.org/t/p/original/' + this.state.movie.poster_path} />
            <div className="detail-card--content">
              <p className="movie-release-date">RELEASE DATE: {this.state.movie.release_date}</p>
              <p className="movie-rating">RATING: {this.state.movie.vote_average*10}%</p>
              <p className="detail-card--desc">{this.state.movie.overview}</p>
              <div className="detail-card--btn">
              <input type='button' value='Add to Favourites' />
            </div>
            </div>
            </div>
        </div>
      </div>
    );
  }

}

export default MovieDetails;