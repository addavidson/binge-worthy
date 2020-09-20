import React from 'react';

class MovieRow extends React.Component {
    viewMovie() {
        // console.log('trying to view movie');
        // console.log(this.props.movie.title);
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }
    
    render() {
        return (<table key={this.props.movie.id}>
        <tbody>
            <tr>
                <td>
                    <img alt="poster" src={this.props.movie.poster_src} />
                </td>
                <td>
                    <h3>{this.props.movie.title}</h3>
                    <p>{this.props.movie.overview}</p>
                    <input type='button' onClick={this.viewMovie.bind(this)} value='View' />
                </td>
            </tr>
        </tbody>
    </table>
        );
    }
}

// https://api.themoviedb.org/3/search/movie?api_key=c00408919006f902f07565fe44e7e2ad&query=marvel

export default MovieRow;