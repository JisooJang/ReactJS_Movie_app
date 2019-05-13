import React, { Component } from 'react';
import './Movie.css';

// 컴포넌트2. 각 영화 리스트 박스 컴포넌트
class Movie extends Component {
    render() {
        return (
            <div>
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}


// 컴포넌트3. 각 영화 포스터 이미지 컴포넌트.
class MoviePoster extends Component {
    render() {
        return (
            <img src={this.props.poster}/>
        );
    }
}

export default Movie;