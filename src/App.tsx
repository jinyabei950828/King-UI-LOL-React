import React, { useState } from 'react';
import './lib/style/index.scss';

import { HashRouter,Route,Routes,Navigate } from 'react-router-dom';

import { Topnav } from './view/components/Topnav/Topnav';
import { Home } from './view/Home/Home'
import { Doc } from './view/Doc/Doc'

interface AsideContextType {
  asideVisible: boolean, //设置侧边栏的显示和隐藏
  setAsideVisibleFn:any, 
  aside: boolean, //是否有侧边栏(大于500有,小于500没有)
  setAsideFn:any
}

export const AsideContext = React.createContext<AsideContextType>({
  asideVisible: false, 
  setAsideVisibleFn: {}, 
  aside: false, 
  setAsideFn:{}
})

function App() {
  //clientWidth:内容区加水平内边距
  const width = document.documentElement.clientWidth;
  const [asideVisible,setAsideVisible] = useState(width>500)
  const [aside,setAside] = useState(width>500)
  const setAsideVisibleFn = (value:boolean)=>{
    setAsideVisible(value)
  }
  const setAsideFn = (value:boolean)=>{
    setAside(value)
  }


  return (
    <div className="App">
      <AsideContext.Provider value={{asideVisible,setAsideVisibleFn,aside,setAsideFn}}>
        <Topnav />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/doc/*" element={<Doc/>}/>
            <Route path="*" element={<Navigate to="/doc/*"/>} />
          </Routes>
        </HashRouter>
      </AsideContext.Provider>
    </div>
  );
}

export default App;
