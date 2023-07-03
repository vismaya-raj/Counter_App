import { useState } from "react"
import './Counter.css';
import Type from "./Type";
// import AddIcon from '@mui/icons-material/Add';

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
      <div> 
      <h1 className="heading_style">
       Counter App 
      </h1>
      <h3 className="sub-heading"><Type/></h3>
      </div>
   
   <div className="counter"> 
 
    {getCount}
    </div >
    
    <div className="button-styling">
    <button className = "dec" onClick={decrement}>-</button>
      <button className="inc" onClick={increment}>+</button>
    
      </div>
     
    
 
    </div>
    


  
 
        )
}