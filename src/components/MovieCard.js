import React from 'react';

class MovieCard extends React.Component {
    constructor(props) {
        super();
        this.state = {
            favouriteIndex: 1
        }
    }
    
    viewMovie() {
        window.location.href = `/binge-worthy/moviedetails/${this.props.movie.id}`
    }

    addToFavourites() {
        sessionStorage.setItem(this.state.favouriteIndex, JSON.stringify(this.props.movie))
        this.setState({
            favouriteIndex: this.state.favouriteIndex + 1
        });
    }


    
    render() {
        return (
        
             <div className="card-list" key={this.props.movie.id}>
                 <div className="card">
                     <img className="card--image" alt={this.props.movie.title} src={this.props.movie.poster_src} />
                     <div className="card--content overlay">
                         <h3 className="card--title">{this.props.movie.title}</h3>
                        <p><small>RELEASE DATE: {this.props.movie.release_date}</small></p>
                        <p><small>RATING: {this.props.movie.vote_average*10}%</small></p>
                        <p className="card--desc line-clamp">{this.props.movie.overview}</p>
                        <div className="card--btns">
                            <input type='button' onClick={this.viewMovie.bind(this)} value='More Info' />
                            <input type='button' onClick={this.addToFavourites.bind(this)} value='Add to Favourites' />
                        </div>
                    </div>
                 </div>
            </div>
        );
    }
}

export default MovieCard;