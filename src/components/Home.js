import React, { Component } from 'react';
import MovieCard from './MovieCard';
import $ from 'jquery';

class Home extends Component {
    constructor(props) {
        super();
        this.state = {
            value: 'popular'
        }

        this.performSearch ('')
        this.filter = this.filter.bind(this);
    }

    performSearch (searchTerm) {
        let urlString = ''
        if(searchTerm === ''){
            if (this.state.value === 'popular') {
                urlString = 'https://api.themoviedb.org/3/movie/popular?api_key=c00408919006f902f07565fe44e7e2ad&language=en-US&adult=false&page=1'
            }  
            else if (this.state.value === 'now-playing') {
                urlString = 'https://api.themoviedb.org/3/movie/now_playing?api_key=c00408919006f902f07565fe44e7e2ad&language=en-US&adult=false&page=1'
            }  
            else if (this.state.value === 'top-rated') {
                urlString = 'https://api.themoviedb.org/3/movie/top_rated?api_key=c00408919006f902f07565fe44e7e2ad&language=en-US&adult=false&page=1'
            } 
            else if (this.state.value === 'upcoming') {
                urlString = 'https://api.themoviedb.org/3/movie/upcoming?api_key=c00408919006f902f07565fe44e7e2ad&language=en-US&adult=false&page=1'
            } 
            else { 
                urlString = 'https://api.themoviedb.org/3/movie/popular?api_key=c00408919006f902f07565fe44e7e2ad&language=en-US&adult=false&page=1' 
            }
        } else if (searchTerm !== '') {
            urlString = 'https://api.themoviedb.org/3/search/movie?api_key=c00408919006f902f07565fe44e7e2ad&language=en-US&adult=false&query=' + searchTerm;
        }


        $.ajax({
            url: urlString,
            success: (searchResults) => {
                console.log('Fetched data successfully');
                const results = searchResults.results

                var movieRows = []

                results.forEach((movie) => {

                    movie.poster_src = 'https://image.tmdb.org/t/p/original/' + movie.poster_path

                    const movieRow = <MovieCard key={movie.id} movie={movie} />
                    movieRows.push(movieRow)
                })

                this.setState({
                    rows: movieRows
                })
            },
            error: (xhr, status, err) => {
                console.error('Failed to fetch data');
            }
        })
    }

    searchChangeHandler(e) {
        console.log(e.target.value);
        const boundObject = this;
        const searchTerm = e.target.value;
        boundObject.performSearch(searchTerm);
    }

    filter(event){
        this.setState({
            value: event.target.value
        }, () => this.performSearch(''))
    }
    
    render() {
        return (
            <div className="wrapper">
                <div className='searchbar'>
                    <input onChange={this.searchChangeHandler.bind(this)} placeholder="Search For A Movie..." />
                </div>
                <form className="filter-movies">
                    <label>Filter By:</label>
                    <select onChange={this.filter} value={this.state.value}>
                        <option value="popular">Popular</option>
                        <option value="now-playing">Now Playing</option>
                        <option value="upcoming">Upcoming</option>
                        <option value="top-rated">Top Rated</option>
                    </select>
                </form>
                {this.state.rows}
            </div>
            
        );
    }
}

export default Home;