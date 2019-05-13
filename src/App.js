import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

const movieTitles = [
  "Eternal Sunshine",
  "10 Things I Hate About You",
  "Begin Again",
  "Bohemian Rhapsody",
  "Sing Street"
]

const movieImages = [
  "https://static01.nyt.com/images/2016/07/06/watching/eternal-sunshine-watching-recommendation/eternal-sunshine-watching-recommendation-videoSixteenByNineJumbo1600.jpg",
  "https://cdn-images-1.medium.com/max/1330/1*81-CC8AFePhYcetE18InZA.jpeg",
  "https://img.rasset.ie/00090f2b-500.jpg",
  "https://pmcvariety.files.wordpress.com/2018/08/bohemian-rhapsody-3.jpg?w=1000",
  "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-236113-SING-STREET.0.0.jpg?crop=900:600&width=440"
];
// 컴포넌트1. 전체 영화 리스트 컴포넌트.
class App extends Component {
  render() {  // Movie 컴포넌트를 불러온후 렌더링.
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]}/>
        <Movie title={movieTitles[1]} poster={movieImages[1]}/>
        <Movie title={movieTitles[2]} poster={movieImages[2]}/>
        <Movie title={movieTitles[3]} poster={movieImages[3]}/>   
      </div>
    );
  }
}

export default App;
