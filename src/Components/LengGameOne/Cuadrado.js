import React from 'react';
import "../../css/LengGameOne.css"

export default (props) => {

  const style = {
    width: 20,
    height: 20,
    backgroundColor: 'green',
  }

  return (
    <div className="cuadrado" style={style}></div>
  )
}