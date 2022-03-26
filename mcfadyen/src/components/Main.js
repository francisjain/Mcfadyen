import React from 'react'
import "./Main.css"
import Heading from './Heading'
import PictureSide from './PictureSide'
import { Row } from 'react-bootstrap'

function Main() {
  return (
    <div className="mainb">
      <Heading />
      <Row><PictureSide /></Row>
    </div>
  )
}

export default Main