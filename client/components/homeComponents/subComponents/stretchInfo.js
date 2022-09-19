import React from 'react'

const StretchInfo = value => {
    console.log(value)
  return (
    <div>
      <p>Name: {value.name}</p>
      <p>Muscle: {value.muscle}</p>
      <p>Instructions: {value.instructions}</p>
    </div>
  )
}

export default StretchInfo;