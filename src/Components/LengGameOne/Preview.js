import React from 'react';

export default (props) => {

  const text = props.text.split('');


  return (
    <div>
      {
        text.map((s,i) => {
          return <span key={i}>{s}</span>
        })
      }
    </div>
  )
}