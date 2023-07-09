import React, {useContext} from "react";
import {HashRouter, Link} from "react-router-dom";
import './style.scss'
import {AsideContext} from "../../../App";

const Topnav = () => {
  const {asideVisible, setAsideVisibleFn, aside} = useContext(AsideContext);
  return (
    <div className="topnav">
      {
        aside ? <div onClick={() => {setAsideVisibleFn(!asideVisible)}} className="toggleAside">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-menu"></use>
          </svg>
        </div> : ''
      }
      <HashRouter>
        <Link to="/" className="logo">
          <div>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-Ting_990"></use>
            </svg>
          </div>
        </Link>
        <ul className="menu">
          <li><Link to="/doc">文档</Link></li>
          <li><a href="#">博客</a></li>
          <li><a href="https://github.com/jinyabei950828">GitHub</a></li>
        </ul>
      </HashRouter>
    </div>
  )
}

export { Topnav }