import React from 'react'
import "./PictureSide.css"
import { Col, Row, Image, Button } from 'react-bootstrap';
import Discribtion from './Discribtion';
import SlideSide from './SlideSide';


function PictureSide() {
    return (


        <Row >
            <Col md={4} className="first">
                <div className="stareReview">
                    <div className="star">
                        <Image src="./images/start.jpg" alt="brud" />
                        <Image src="./images/start.jpg" alt="brud" />
                        <Image src="./images/start.jpg" alt="brud" />
                        <div className="combine_start">
                            <Image className="img1s" src="./images/Path 122.png" alt="brud" />
                            <Image className="img2s" src="./images/Vector.png" alt="brud" />
                        </div>
                        <Image className="i" src="./images/Vector.png" alt="brud" />
                    </div>

                </div>
                <Image className="brdimg" src="./images/part1.jpg" alt="brud" fluid />
                <div className="circles">
                    <div className="circle"></div>
                    <div className="circle active"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
            </Col>
            <Col md={3} className="Second">
                <div className="price_list">
                    <div className="first_price mb-3">
                        <div className="act_indecator"></div>
                        <div className="subject">
                            <p className="money">$5.99</p>
                            <p className="moneydis">Shipping cost: $5.00</p>
                        </div>
                    </div>
                    <div className="second_price mb-3">
                        <div className="indecator"></div>
                        <div className="subject">
                            <p className="money">$3.89</p>
                            <p className="moneydis">Shipping cost: $5.00</p>
                        </div>
                    </div>
                    <div className="third_price mb-3">
                        <div className="indecator"></div>
                        <div className="subject">
                            <p className="money">$7.29</p>
                            <p className="moneydis">Shipping cost: $5.00</p>
                        </div>
                    </div>
                    <div className="d-grid gap-2 mt-2">
                        <Button variant="primary opacity-75" size="sm">
                            See more sellers
                        </Button></div>
                </div>
            </Col>
            <Col md={4} className="Third">
                <div className="detail_list">
                    <div className="border p-2 rounded">
                        <div className="first_detail mb-3">
                            <div className="para_h">Seller: Seller name</div>
                            <div className="subject">
                                <Image src="./images/star (2).png" alt="brud" />&nbsp;
                                <Image src="./images/star (2).png" alt="brud" />&nbsp;
                                <Image src="./images/star (2).png" alt="brud" />&nbsp;
                                <Image src="./images/star (2).png" alt="brud" />&nbsp;
                                <Image src="./images/star (1).png" alt="brud" />
                            </div>
                            <div className="detail_brand mt-3"><p className="para_h">Brand: Dave Killer's Breads</p></div>
                        </div>
                        <div className="second_set mb-3">
                            <p className="para_h">Available in</p>
                            <div className="avaiblebtn">
                                <Button variant="outline-secondary">300 gms</Button>
                                <Button variant="primary opacity-75">500 kg</Button>
                                <Button variant="outline-secondary ">750 kg</Button>
                            </div>
                        </div>
                        <div className="third_detailsm ">
                            <div className="paralist">
                                <p className="para_h mb-1">Quantity</p>
                                <Button variant="outline-secondary"> -  1  + </Button>
                            </div>
                            <div className="subject">
                                <p className="para_h mb-1">Check availability</p>
                                <Button variant="outline-secondary">Enter zipcode </Button>
                                <Button variant="primary opacity-75 ms-2">Check</Button>
                            </div>
                        </div>
                        
                        <div className="good">
                                <Button variant="primary opacity-75" size="sm">
                                Request for Quote
                                </Button></div>
                    </div>
                    <div className=" gap-2 detailbtn">
                        <Button variant="primary opacity-75" size="sm">
                            Add to Cart
                        </Button>
                        <Button variant="primary ms-3" size="sm">
                            BUY Now
                        </Button>
                    </div>
                </div>
            </Col>

            <Discribtion />
            <SlideSide />

        </Row >

    )
}

export default PictureSide