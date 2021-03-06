import React from 'react';
import ReactDOM from 'react-dom';
// React Router는 위에서 살펴본 SPA의 라우팅 문제를 해결하기 위해서 거의 표준처럼 사용되고 있는 네비게이션 라이브러리입니다.
// React Router를 이해하는데 핵심이 되는 3가지 컴포넌트 중 Link 등이 있음.
// 클라이언트 사이드 렌더링을 하는 SPA 특징을 가지는 리액트
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'

import Dash from './Dash';

import Problem from './item/containers/Problem';
//import comment from './containers/comment';
// import evaluation from './containers/evaluation-view';
// import evaluation from './containers/yearData/yearDateListview';
import evaluation from './item/containers/evaluation';
import './CSS/index.css';


ReactDOM.render(
  //   <Router>
  //      <Route path="/" component={LoginView}>
  //      </Route>
  // </Router>,
  <Router>
      <Route exact path="/" component={Dash} />  
      <Route path="/Problem" component={Problem} />
      <Route path="/login" component={evaluation}/>
  </Router>,
  document.getElementById('root')
);
