import React from 'react'
import "./PictureSide.css"
import { Col, Image, Button } from 'react-bootstrap';
import Discribtion from './Discribtion';
import SlideSide from './SlideSide';
import ImgSlider from './ImgSlider';


function PictureSide() {
    return (


        <Col >
            <div className="app">
                <div md={4} className="first">
                    <div className="stareReview">
                        <div className="star">

                            <Image className="rating" src="./images/rating star.png" alt="brud" />
                            <div className="pt-3 review"><p > 5 reviews</p></div>

                        </div>

                    </div>
                    <div className="Carousal__data">
                        <ImgSlider />
                    </div>
                </div>
                <div className="second_body">
                    <div className="Second_div">
                        <div className="price_list">
                        
                            <div className="price active price_margin">
                            
                                <div className="act_indecator"></div>
                                <div >
                                    <p className="money">$5.99</p>
                                    <p className="moneydis">Shipping cost: $5.00</p>
                                </div>
                            </div>
                            <div className="inactive">
                                <div className="price price_margin">
                                    <div className="indecator"></div>
                                    <div >
                                        <p className="money">$3.89</p>
                                        <p className="moneydis">Shipping cost: $5.00</p>
                                    </div>
                                </div>
                                <div className="price price_margin">
                                    <div className="indecator"></div>
                                    <div >
                                        <p className="money">$7.29</p>
                                        <p className="moneydis">Shipping cost: $5.00</p>
                                    </div>
                                </div>
                                <div className="d-grid gap-2 mt-2 second_lastbtn">
                                    <Button variant="primary opacity-75" size="sm">
                                        See more sellers
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="remover"></div>
                    <div className="Third ">
                        <div className="details ">
                            <div className="first_detail  p-2">
                                <div className="para_h">Seller: <span style={{ color: '#4978E8', textDecorationLine: 'underline' }}>Seller name</span></div>
                                <div className="subject">
                                    <Image src="./images/star (2).png" alt="brud" />&nbsp;
                                    <Image src="./images/star (2).png" alt="brud" />&nbsp;
                                    <Image src="./images/star (2).png" alt="brud" />&nbsp;
                                    <Image src="./images/star (2).png" alt="brud" />&nbsp;
                                    <Image src="./images/star (1).png" alt="brud" />
                                </div>
                                <div className="detail_brand mt-3"><p className="para_h">Brand: Dave Killer's Breads</p></div>
                            </div>
                            <div className="second_set p-2">
                                <p className="para_h">Available in</p>
                                <div className="avaiblebtn">
                                    <Button variant="outline-secondary ">300 gms</Button>
                                    <Button variant="primary opacity-75 ms-4">500 kg</Button>
                                    <Button variant="outline-secondary ms-4">750 kg</Button>
                                </div>
                            </div>
                            <div className="third_detailsm p-2">
                                <div className="paralist">
                                    <p className="para_h mb-1">Quantity</p>
                                    <Button variant="outline-secondary"> -  1  + </Button>
                                </div>
                                <div className="subject ms-4">
                                    <p className="para_h mb-1">Check availability</p>
                                    <Button variant="outline-secondary">Enter zipcode </Button>
                                    <Button variant="primary opacity-75 ms-4">Check</Button>
                                </div>
                            </div>

                            <div className="good">
                                <div className="d-grid gap-2 mt-2 ">
                                    <Button variant="primary" size="sm">
                                        Request for Quote
                                    </Button>
                                </div>
                            </div>
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
                </div>
            </div>

            <Discribtion />
            <SlideSide />

        </Col >

    )
}

export default PictureSide