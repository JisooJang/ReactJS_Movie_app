import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import StarRatings from 'react-star-ratings';

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

function Movie({title, poster, genres, synopsis, rating}) {
    return (
        <div className="Movie"> 
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie_Rating">
                    <StarRatings
                        rating={rating / 2}
                        starRatedColor="yellow"
                        numberOfStars={5}
                        name='rating'
                        starDimension="30px"
                        starSpacing="5px"
                        starEmptyColor="grey"
                    />
                </div>
                <div className="Movie_Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} /> )}
                </div>
                <div className="Movie_Synopsis">
                    <LinesEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    />
                </div>
            </div>
            
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


function MoviePoster({poster, alt}) {
    return (
        <img src={poster} alt={alt} className="Movie__Poster"/>
    );
}

function MovieGenre({genre}) {
    return (
        <span className="Movie_Genre">{genre} </span>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}

export default Movie;