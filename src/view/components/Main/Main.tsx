import React from "react";
import {Route, Routes} from "react-router-dom";
import {IntroDoc} from "../../DocLib/IntroDoc/IntroDoc";
import {ButtonDoc} from "../../DocLib/ButtonDoc/ButtonDoc";
import {MenuDoc} from "../../DocLib/MenuDoc/MenuDoc";
import {InputDoc} from '../../DocLib/InputDoc/InputDoc'
import {UploadDoc} from '../../DocLib/UploadDoc/UploadDoc'
import {ProgressDoc} from '../../DocLib/Progress/ProgressDoc'
import {NotFound} from "../../DocLib/NotFound/NotFound";
import './style.scss'

const Main = () => {
  return (
    <div className="main-doc">
      <Routes>
        <Route path="/intro" element={<IntroDoc />} />
        <Route path="/button" element={<ButtonDoc/>} />
        <Route path="/menu" element={<MenuDoc/>} />
        <Route path="/input" element={<InputDoc/>} />
        <Route path="/upload" element={<UploadDoc/>} />
        <Route path="/progress" element={<ProgressDoc/>} />
        <Route path="/*" element={<NotFound />}/>
      </Routes>
    </div>
  )
}

export {Main}