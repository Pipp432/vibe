'use client'
import React from 'react'

import '../../app/globals.css'
function SelectionIndicator({reference}:{reference:any}) {
  
  return (
    <div ref={reference} style={{top:"0rem"}} 
      className="rounded-tr-xl rounded-br-xl bg-white w-3 h-24 absolute transition-transform ">

    </div>
  );
}

export default SelectionIndicator
