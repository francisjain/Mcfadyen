import React from 'react'
import "./Sidefade.css"

function Sidefade({ sidebar ,close}) {
  return (
    <div className={sidebar ? "fade_effect fade_open" : "fade_effect"} onClick={close}></div>
  )
}

export default Sidefade