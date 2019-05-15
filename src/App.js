import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

// Component rendering 순서 : componentWillMount() -> render() -> componentDidMount()

// Component Updating 순서 : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {
    
  }

  componentWillMount() {
    console.log('will mount');
  }

  componentDidMount() {
    console.log('did mount');
    setTimeout(() => {
      this.setState({
        movies: [
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
        ]
      });
    }, 2000);
  }

  // state값은 직접적으로 변경하면 안되고, setState 메소드를 통해 간접 변경해야함.
  // setState는 우리가 보고있는 브라우저 전체 페이지를 새로고침하지 않고 단지 state변화가 있는 그 컴포넌트만 새로고침합니다.
  // state값이 변경되면, render()이 재동작한다. 새로운 state값과 함께

  
  // function
  _renderMovies = () => {
    const movies = this.state.movies.map((movies, index) => {   
      return <Movie title={movies.title} poster={movies.poster} key={index} />
    })

    return movies;
  }
  
  render() {  // Movie 컴포넌트를 불러온후 렌더링.
    console.log('did render');

    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

// 자식 컴포넌트에서 리스트같이 많은 양의 데이터를 다룰때, 각 컴포넌트들은 고유한 값의 'key' 속성을 추가해줘야함.
// Array.map() 메소드는 Array의 요소 하나하나를 mapping해서 새로운 Array를 만든다. '=>' 이는 콜백 function을 축약한 표현식
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map


export default App;
