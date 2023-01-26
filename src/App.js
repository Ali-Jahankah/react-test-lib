import React, { useState } from 'react';

import './App.css';

function App() {
  const[bg,setBg]=useState("black");
  const[color,setColor]=useState("white")
  return (
    <div className="App">
     <button className='change-color-btn' style={{background:bg,color:color}} onClick={()=>{setBg(bg==="gray"?"black":"gray");setColor(color==="black"?"white":"black")}} >{`Change BG to ${bg}`}</button>
    </div>
  );
}

export default App;
