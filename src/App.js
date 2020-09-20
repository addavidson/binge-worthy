import React, { Component } from 'react';
import MovieRow from './MovieRow';
import $ from 'jquery';

class App extends Component {
    constructor(props) {
        super();
        this.state = {}
        // console.log('this is my initializer');

        // const movies = [
        //     {id: 0, poster_src: "https://image.tmdb.org/t/p/w185/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg", title: "Avengers: Infinity War", overview: "lorem impsum 1" },
        //     {id: 2, poster_src: "https://image.tmdb.org/t/p/w185/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg", title: "The Avengers", overview: "lorem impsum 2" }
        // ]

        // var movieRows = []
        // movies.forEach((movie) => {
        //     console.log(movie.title);

        //     const movieRow = <MovieRow movie={movie} />
        //     movieRows.push(movieRow)
        // })

        // this.state = {rows: movieRows}

        this.performSearch ('wonder')
    }

    performSearch (searchTerm) {
        console.log('perform search using moviedb');
        const urlString = 'https://api.themoviedb.org/3/search/movie?api_key=c00408919006f902f07565fe44e7e2ad&query=' + searchTerm;
        $.ajax({
            url: urlString,
            success: (searchResults) => {
                console.log('Fetched data successfully');
                const results = searchResults.results
                // console.log(results[0])

                var movieRows = []

                results.forEach((movie) => {

                    movie.poster_src = 'https://image.tmdb.org/t/p/w185/' + movie.poster_path

                    // console.log(movie.poster_path)
                    const movieRow = <MovieRow key={movie.id} movie={movie} />
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
    
    render() {
        return (
            <div>
            
                <table className="titleBar">
                    <tbody>
                        <tr>
                            <td>
                                [img]
                            </td>
                            <td width="8"/>
                            <td>
                                <h1>MoviesDB Search</h1>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <input style={{
                    fontSize: 24,
                    display: 'block',
                    width: '97%',
                    paddingTop: 8,
                    paddingBottom: 8,
                    paddingLeft: 16
                }} onChange={this.searchChangeHandler.bind(this)} placeholder="Enter search term" />

                {this.state.rows}



            </div>
        );
    }
}

export default App;