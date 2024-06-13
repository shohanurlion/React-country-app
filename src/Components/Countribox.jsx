import React from 'react'
import './Countriboxstyle.css'
function Countribox(props) {

    const {count}=props;
    const {name,flags,capital,population}=count;
    const removehendeler=(common)=>{
      props.heandlremover(common)
    }
  return <article className='country'>
    <div>
    <img src={flags.png}/>
        <h2>Name: {name.common}</h2>
        <h3>Capital: {capital}</h3>
        <h3>Population: {population}</h3>
        <button className='btn' onClick={()=>{
          removehendeler(name.common)
        }}> Remove Country</button>
    </div>
      
  </article>
 
}

export default Countribox