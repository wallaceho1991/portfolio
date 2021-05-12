import './App.scss';
import About from './components/about';
import MainList from './components/mainList';
import Work from './components/work';
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation
} from "react-router-dom";
import { useState } from 'react';

export default function App() {

  const [tab, setTab] = useState('works');

  return (
    <Router>
      <div className="pal">
        <h2>Accounts</h2>
        {/* <div><span class="f2">Wallace Ho</span></div>
          <div><span class="f4">UI UX Developer</span></div> */}
        <div className="tabs-ctn">
            <button className={`f4 ud btn clear ${(tab === 'works')? "active": "inactive"}`} >
              <Link onClick={()=>setTab('works')} to="/works">Works</Link>
            </button>
            <button  className={`f4 ud btn clear ${(tab === 'about')? "active": "inactive"}`}>
              <Link onClick={()=>setTab('about')} to="/about">About</Link>
            </button>
          </div>
      </div>

      <Switch>
          <Route exact path="/">
            <Redirect to="/works" />
          </Route>
          <Route exact path="/works" children={<MainList />} />
          <Route exact path="/works/:workId" children={<Work />} />
          <Route path="/about" children={<About />} />
        </Switch>
    </Router>
  );
}