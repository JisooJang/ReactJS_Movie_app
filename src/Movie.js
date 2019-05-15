import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

// 컴포넌트2. 각 영화 리스트 박스 컴포넌트
/*
class Movie extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
    };

    render() {
        return (
            <div>
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}
*/

function Movie({title, poster}) {
    return (
        <div>
            <MoviePoster poster={poster}/>
            <h1>{title}</h1>
        </div>
    );
}


// 컴포넌트3. 각 영화 포스터 이미지 컴포넌트.
/*
class MoviePoster extends Component {

    static propTypes = {
        poster: PropTypes.string.isRequired
    };

    render() {
        return (
            <img src={this.props.poster} alt="Movie Poster"/>
        );
    }
}
*/


function MoviePoster({poster}) {
    return (
        <img src={poster} alt="Movie Poster"/>
    );
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}

export default Movie;