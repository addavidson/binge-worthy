import React, { Component } from 'react';
import FavouriteMovieCard from './FavouriteMovieCard';

class Favourites extends Component {
    constructor(props) {
        super();
        this.state = {
            favouritedMovies: [],
            rows: []
        }
    }

    componentDidMount(){
        this.getMoviesFromSessionStorage()
    }

    getMoviesFromSessionStorage() {
        for (let i = 0; i < sessionStorage.length; i++){
            this.state.favouritedMovies.push(JSON.parse(sessionStorage.getItem(sessionStorage.key(i))))
        }
        console.log(this.state.favouritedMovies)

        var movieRows = []
        this.state.favouritedMovies.forEach((movie) => {

            movie.poster_src = 'https://image.tmdb.org/t/p/original/' + movie.poster_path

            const movieRow = <FavouriteMovieCard key={movie.id} movie={movie} />
            movieRows.push(movieRow)
        })

        this.setState({
            rows: movieRows
        })
    }


    render() {
        return (
            <div className="favourites-list">
                {this.state.rows}
            </div>
        )
    }
}

export default Favourites;