import { useState } from "react"
import './Counter.css';
import Type from "./Type";
import { motion } from 'framer-motion';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

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
    <motion.button className="dec" onClick={decrement} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <RemoveIcon style={{fontSize:"100px"}}/>
      </motion.button>
      <motion.button className="inc" onClick={increment} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <AddIcon style={{fontSize:"100px"}}/>
      </motion.button>
    
      </div>
     
    
 
    </div>
    


  
 
        )
}