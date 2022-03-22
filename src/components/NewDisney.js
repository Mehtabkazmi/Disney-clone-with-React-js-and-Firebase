import React from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { selectNewDisney } from "../slice/movieSlice";
import './types.css'
const NewDisney = () => {
    const movies = useSelector(selectNewDisney);
  return (
      <div className='container1'>
          <h4>New Disney for you</h4>
          <div className='content1'>
              {movies && movies.map((item,key) => (
                  <div key={key} className='wrap'>
                      <Link to={'/detail/' + item.id}>
                          <img src={item.cardImg} alt={item.title} />
                </Link>  
                  </div>
                      
            ))}
          </div>
    </div>
  )
}

export default NewDisney