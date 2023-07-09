import React, {useContext, useEffect} from "react";
import {AsideContext} from "../../App";
import {NavLink} from "react-router-dom";
import {Main} from "../components/Main/Main";
import './style.scss'

const Doc = () => {
  const {asideVisible, setAsideVisibleFn, setAsideFn} = useContext(AsideContext);
  setAsideFn(true)

  const asideDisplay = asideVisible ? "flex" : "none";
  useEffect(() => {
    const width = document.documentElement.clientWidth
    if(width > 500){
      setAsideVisibleFn(true)
    }
  })
  const onChangeAside = (e: React.MouseEvent) => {
    if(e.target instanceof HTMLAnchorElement){
      setAsideVisibleFn(false)
    }
  }
  return (
    <div className="content">
      <aside style={{display: asideDisplay}} className="aside-menu">
        <h2>文档</h2>
        <ul onClick={onChangeAside}>
          <li>
            <NavLink to="/doc/intro" className={({isActive})=>isActive?'link-active':''}>介绍</NavLink>
          </li>
          <li>
            <NavLink to="/doc/install" className={({isActive})=>isActive?'link-active':''}>安装</NavLink>
          </li>
          <li>
            <NavLink to="/doc/get-started" className={({isActive})=>isActive?'link-active':''}>快速使用</NavLink>
          </li>
        </ul>
        <h2>组件列表</h2>
        <ul>
          <li>
            <NavLink to="/doc/button" className={({isActive})=>isActive?'link-active':''}>Button 按钮</NavLink>
          </li>
          <li>
            <NavLink to="/doc/menu" className={({isActive})=>isActive?'link-active':''}>menu菜单</NavLink>
          </li>
          <li>
            <NavLink to="/doc/input" className={({isActive})=>isActive?'link-active':''}>Input 表单</NavLink>
          </li>
          <li>
            <NavLink to="/doc/upload" className={({isActive})=>isActive?'link-active':''}>Upload 上传</NavLink>
          </li>
          <li>
            <NavLink to="/doc/progress" className={({isActive})=>isActive?'link-active':''}>progress</NavLink>
          </li>
        </ul>
      </aside>
      <Main/>
    </div>
  )
}

export {Doc}