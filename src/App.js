import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar'
import Newscomponent from './components/Newscomponent';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App =()=> {

  const [progress, setProgress] = useState(0)

  const changeProgress=(progress)=>{
    setProgress(progress)
  }
  const apikey = "69ed27a5f2cc48f78466d6bd26281254"

    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar color='#f11946'progress={progress}/>
          <Routes>
            <Route exact path='/'  element={<Newscomponent apikey={apikey} setProgress={changeProgress} key="general" pageSize={10} category={'general'} country={'in'} />} />
            <Route  exact path='/science' element={<Newscomponent apikey={apikey} setProgress={changeProgress} key="science" pageSize={10} category={'science'} country={'in'} />} />
            <Route  exact path='/technology' element={<Newscomponent apikey={apikey} setProgress={changeProgress} pageSize={10}key="technology" category={'technology'} country={'in'} />} />
            <Route  exact path='/entertainment' element={<Newscomponent apikey={apikey} setProgress={changeProgress} pageSize={10}key="entertainment" category={'entertainment'} country={'in'} />} />
            <Route  exact path='/sports' element={<Newscomponent apikey={apikey} setProgress={changeProgress} pageSize={10}key="sports" category={'sports'} country={'in'} />} />
            <Route  exact path='/business' element={<Newscomponent apikey={apikey} setProgress={changeProgress} pageSize={10}key="business" category={'business'} country={'in'} />} />
            <Route  exact path='/health' element={<Newscomponent apikey={apikey} setProgress={changeProgress} pageSize={10} key="health" category={'health'} country={'in'} />} />
          </Routes>
        </Router>
      </>
    )
  }

export default App

