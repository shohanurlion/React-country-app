import React from 'react'
import {v4 as uuidv4} from 'uuid';
import Countribox from './Countribox';
import './countrystyle.css'
function Countries(props) {
  return <div className='countries'>
        {props.contries.map((count)=>{
           const countriNew = {count , id:uuidv4()}
           return <Countribox {...countriNew} key={countriNew.id} heandlremover={props.heandlremov}/>
           
        })}
        
  </div>
  
}

export default Countries