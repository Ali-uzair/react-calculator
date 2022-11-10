import React from 'react'
import "./header.css"

function header() {
  return (
    <div className='header'>
      <div className='history'></div>
      <div className='expression'>
        <p>10+10+0</p>
        <p>10+10+0</p>

        <p>
          4545+445
        </p>
      </div>
      <br />
      <p className='result'>
        1452
      </p>
    </div>
  )
}

export default header
