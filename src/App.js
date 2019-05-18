import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

// Component rendering 순서 : componentWillMount() -> render() -> componentDidMount()

// Component Updating 순서 : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  componentWillMount() {
    console.log('will mount');
  }

  state = {}

  componentDidMount() {
    this._getMovies();
  }

  // state값은 직접적으로 변경하면 안되고, setState 메소드를 통해 간접 변경해야함.
  // setState는 우리가 보고있는 브라우저 전체 페이지를 새로고침하지 않고 단지 state변화가 있는 그 컴포넌트만 새로고침합니다.
  // state값이 변경되면, render()이 재동작한다. 새로운 state값과 함께

  
  // function
  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      return <Movie 
        title={movie.title}
        poster={movie.medium_cover_image} 
        key={movie.id} 
        genres={movie.genres}
        synopsis={movie.synopsis}
        rating={movie.rating}
      />
    })

    return movies;
  }

  // async function
  // callApi function으로부터 모든 데이터를 수신 완료하고 수행 
  _getMovies = async () => {  
    const movies = await this._callApi();   
    this.setState({
      movies
    });
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json())    // fetch()가 성공적으로 끝났으면 then 문장을 실행
    .then(json => json.data.movies)   // _getMovies의 const movies 변수에 최종으로 전달(return)되는 데이터 
    .catch(err => console.log(err))             // fetch()가 오류가 나면, catch 문장을 실행
  }
  
  render() {  // Movie 컴포넌트를 불러온후 렌더링.
    console.log('did render');
    const { movies } = this.state;
    console.log(movies);
    return (
      <div className={movies ? "App" : "App--loading"}>
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

// 자식 컴포넌트에서 리스트같이 많은 양의 데이터를 다룰때, 각 컴포넌트들은 고유한 값의 'key' 속성을 추가해줘야함.
// Array.map() 메소드는 Array의 요소 하나하나를 mapping해서 새로운 Array를 만든다. '=>' 이는 콜백 function을 축약한 표현식
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map


export default App;
