import React,{useState} from 'react';
import "../../styles/unitTest.css"
const UnitTest = () => {
    const[bg,setBg]=useState("black");
  const[color,setColor]=useState("white")
  const[btnCondition,setBtnCondition]=useState(true)
    exports.seperateWords=(word)=>{
        return word.replace(/\B([A-Z])\B/g," $1");
          }
    return ( 
        <>
            <button className='change-color-btn'
        style={{backgroundColor:bg,color:color}} 
        onClick={()=>{setBg(bg==="gray"?"black":"gray");
        setColor(color==="black"?"white":"black")}}
        disabled={btnCondition} >
        {`Change BG to ${bg==="gray"?"black":"gray"}`}
        </button>
      <br />
      <input type="checkbox" name="checkbox" id="checking" defaultChecked={!btnCondition} onChange={(e)=>setBtnCondition(!btnCondition)} />
        </>
        
     );
}
 
export default UnitTest;