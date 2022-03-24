import React from 'react'
import "./Discribtion.css"
import { Col, Row, Image } from 'react-bootstrap';

function Discribtion() {
    return (
        <div>
            <Row>
                <Col md={5}>
                    <p className="dis_headind mb-2 mt-4">Description</p>
                    <p className="para_h">Ingredients: Water,
                        Organic Whole Wheat Flour, Organic Cracked Whole Wheat,
                        Organic Cane Sugar, Organic Grain and Seed Topping Mix
                        (Organic Flax Seeds, Organic Sunflower Seeds, Organic Brown Sesame Seeds, Organic Triticale Flakes [Wheat], Organic Barley Flakes, Organic Oat Flakes, Organic Pumpkin Seeds, Organic Rye Flakes, Organic Black Sesame Seeds, Organic Millet, Organic Spelt Flakes [Wheat], Organic Yellow Cornmeal, Organic Kamut Khorasan Wheat Flakes,
                        Organic Quinoa, Organic Poppy Seeds), Organic Wheat Gluten.</p>
                </Col>
                <Col md={6} >
                    <div className="dis_left">
                        <div className="dis_side mt-4 mb-4">
                            <Image className="imgSize" src="./images/path 108.png" alt=" " />
                            <p className="para_h">15th - 17th September (Expedited shipping)</p>
                        </div>
                        <div className="dis_side mb-4">
                            <Image className="imgSize" src="./images/path 102.png" alt=" " />
                            <p className="para_h">20th - 21st September (Standard shipping) <span className="blue">Select Standard Shipping</span></p>
                        </div>
                        <div className="dis_side">
                            <Image className="imgSize" src="./images/path 99.png" alt=" " />
                            <p className="para_h">Secured Packing</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Discribtion