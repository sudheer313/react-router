import React from 'react'

const Cars = (props) => {
  return (
    <div>
        <h1>I am a {props.brand}</h1>
        <h1>How many cars live in my Garrage?{props.name}</h1>
  
    </div>
  )
}

export default Cars