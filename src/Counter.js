import { useState } from "react"
import './Counter.css';

export function Counter()
{
  const[getCount,setCount] = useState(0);
  const increment=()=>{
    setCount(getCount+1)
  }
  const decrement=()=>
  {
    if(getCount<=0)
    {
      window.stop();
     alert('Invalid Attempt')
    }
    else
    setCount(getCount-1)
  }

    
  return(
    <div className="container-fluid">
   
   <div className="counter"> 
    {getCount}
    </div >
    
    <div className=" d-flex justify-content-between">
    <button className = "dec" btn btn-warning onClick={decrement}>-</button>
      <button className="inc" onClick={increment}>+</button>
    
      </div>
     
    
 
    </div>
    


  
 
        )
}