import React, { useState } from 'react';

import './App.css';

function App() {
  const[bg,setBg]=useState("black");
  const[color,setColor]=useState("white")
  const[btnCondition,setBtnCondition]=useState(true)
  return (
    <div className="App">
        <button className='change-color-btn'
        style={{backgroundColor:bg,color:color}} 
        onClick={()=>{setBg(bg==="gray"?"black":"gray");
        setColor(color==="black"?"white":"black")}}
        disabled={btnCondition} >
        {`Change BG to ${bg==="gray"?"black":"gray"}`}
        </button>
      <br />
      <input type="checkbox" name="checkbox" id="checking" defaultChecked={!btnCondition} onChange={(e)=>setBtnCondition(!btnCondition)} />
    </div>
  );
}

export default App;
