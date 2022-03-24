import React from 'react'
import "./SlideSide.css"
import { Col, Row, Card } from 'react-bootstrap';

function SlideSide() {
    return (
        <Row>
            <Col >
                <div className="mt-4 SlideBottom">
                    <p className="slide_headind">Related Products</p>
                    <p className="slide_headindtwo">Recommended Products</p>
                    <div className="slider_body ">
                        <div className="circlebtn p-2"> {" < "}</div>
                        <div className="slider_card">
                            <Card style={{ width: '18rem' }} className="text-center">
                                <Card.Img variant="top" src="./images/part2.svg" />
                                <Card.Body>
                                    <Card.Text >Organic Thin-Sliced Bread </Card.Text>
                                    <Card.Text className="para_h">1123307722
                                    </Card.Text>
                                    <Card.Title>$2.89</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="slider_card">
                            <Card style={{ width: '18rem' }} className="text-center">
                                <Card.Img variant="top" src="./images/part3.svg" />
                                <Card.Body>
                                    <Card.Text >Organic Good Seed Bread </Card.Text>
                                    <Card.Text className="para_h">1123307723
                                    </Card.Text>
                                    <Card.Title>$3.45</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="slider_card">
                            <Card style={{ width: '18rem' }} className="text-center">
                                <Card.Img variant="top" src="./images/part1.svg" />
                                <Card.Body>
                                    <Card.Text >Pumpkin Seed Bread</Card.Text>
                                    <Card.Text className="para_h">2223307725
                                    </Card.Text>
                                    <Card.Title>$4.99</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="slider_card">
                            <Card style={{ width: '18rem' }} className="text-center">
                                <Card.Img variant="top" src="./images/part4.svg" />
                                <Card.Body>
                                    <Card.Text >White Bread</Card.Text>
                                    <Card.Text className="para_h">3323307777
                                    </Card.Text>
                                    <Card.Title>$3.69</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="slider_card">
                            <Card style={{ width: '18rem' }} className="text-center">
                                <Card.Img variant="top" src="./images/part5.svg" />
                                <Card.Body>
                                    <Card.Text >Canyon Gluten Free Bread</Card.Text>
                                    <Card.Text className="para_h">4228930772
                                    </Card.Text>
                                    <Card.Title>$4.99</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="circlebtn p-2"> {" > "}</div>
                    </div>
                </div>
            </Col>

        </Row>
    )
}

export default SlideSide