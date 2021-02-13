import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { SignUpPage } from "./pages/SignUpPage";
import { LoginPage } from './pages/LoginPage';
import { TimeLinePage } from "./pages/TimeLinePage";
import { PostPage } from "./pages/PostPage";
import { MyPage } from './pages/MyPage';

function App() {
  return <>
    <div className="App">
      <Router>
        <ul>
          <li><NavLink exact to="/">MainPage</NavLink></li>
          <li><NavLink to="/join">Join</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/timeline">TimeLine</NavLink></li>
          <li><NavLink to="/Mypage">MyPage</NavLink></li>
        </ul>

        <Route exact path={"/"} component={MainPage}/>
        <Route path={"/join"} component={SignUpPage}/>
        <Route path={"/login"} component={LoginPage}/>
        <Route path={"/timeline"} component={TimeLinePage}/>
        <Switch>
          <Route path={'/post/:id'} component={PostPage}/>
        </Switch>
        <Route path={"/MyPage"} component={MyPage}/>
      </Router>
    </div>
  </>
}

export default App;
