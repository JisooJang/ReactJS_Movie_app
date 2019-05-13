import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

/*
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
*/

const movies = [
  {
    title: "Eternal Sunshine",
    poster: "https://static01.nyt.com/images/2016/07/06/watching/eternal-sunshine-watching-recommendation/eternal-sunshine-watching-recommendation-videoSixteenByNineJumbo1600.jpg"
  },
  {
    title: "10 Things I Hate About You",
    poster: "https://cdn-images-1.medium.com/max/1330/1*81-CC8AFePhYcetE18InZA.jpeg"
  },
  {
    title: "Begin Again",
    poster: "https://img.rasset.ie/00090f2b-500.jpg"
  },
  {
    title: "Bohemian Rhapsody",
    poster: "https://pmcvariety.files.wordpress.com/2018/08/bohemian-rhapsody-3.jpg?w=1000"
  },
  {
    title: "Sing Street",
    poster: "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-236113-SING-STREET.0.0.jpg?crop=900:600&width=440"
  }
];
// 컴포넌트2. 영화정보를 담은 객체 리스트

class App extends Component {
  render() {  // Movie 컴포넌트를 불러온후 렌더링.
    return (
      <div className="App">
        {movies.map(movies => {   
          return <Movie title={movies.title} poster={movies.poster} />
        })}
      </div>
    );
  }
}

// Array.map() 메소드는 Array의 요소 하나하나를 mapping해서 새로운 Array를 만든다. '=>' 이는 콜백 function을 축약한 표현식
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map


export default App;
