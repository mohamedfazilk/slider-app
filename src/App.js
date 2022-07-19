import React, { useEffect, useState } from "react";
import data from './data'
import {FaQuoteRight} from 'react-icons/fa'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';


function App() {
  const [people, SetPeople] = useState(data);
  const [index, SetIndex] = useState(0);

  //adding useEffect when index below 0 & above last index
useEffect( ()=>{
  const lastIndex = people.length - 1;
  if(index < 0 ){
    SetIndex(lastIndex)
  }
  
  if(index > lastIndex){
    SetIndex(0)
  }
},[index,people]);//need to change index & people when rendering


useEffect(()=>{
setInterval(()=>{
  SetIndex(index + 1)
},3000);
},[index])

  return( 
  <section className='section'>
    <div className="title">
      <h2>
        <span>/</span>reviews 
      </h2>
    </div>
    <div className="section-center">
      { people.map((person, personIndex)=>{
        const {id,image,name,title,quote}= person;

       
        let position = 'nextSlide';
        if (personIndex === index) {
          position = 'activeSlide';
        }
        if (
          personIndex === index - 1 ||
          (index === 0 && personIndex === people.length - 1)
        ) {
          position = 'lastSlide';
        }
        return ( 
        <article className={position} key={id}>
          <img src={image} alt={name} className='person-img'/>
          <h4>{name}</h4>
          <p className="title">{title}</p>
          <p className="quote">{quote}</p>
          <FaQuoteRight className='icon'/>
        </article>
        
        )
      })}
      <button className='prev' onClick={()=>SetIndex(index -1)}>
        <FiChevronLeft/>
        </button>
      <button className='next' onClick={()=>SetIndex(index +1)}>
        <FiChevronRight/>
        </button>
    </div>
  </section>
  )}

export default App;
