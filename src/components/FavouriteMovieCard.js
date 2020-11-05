import React from 'react';

class FavouriteMovieCard extends React.Component {
    constructor(props) {
        super();
        this.state = {
            favouriteIndex: 1
        }
    }
    
    viewMovie() {
        window.location.href = `/binge-worthy/moviedetails/${this.props.movie.id}`
    }

    removeFromFavourites() {
        sessionStorage.removeItem(1) //not yet dynamic
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
                            <input type='button' onClick={this.removeFromFavourites.bind(this)} value='Remove' />
                        </div>
                    </div>
                 </div>
            </div>
        );
    }
}

export default FavouriteMovieCard;