import React from 'react'
import "./Footer.css"
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import AddLocationOutlinedIcon from '@material-ui/icons/AddLocationOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Col, Row, Button, InputGroup, FormControl } from 'react-bootstrap';

function Footer() {
    return (
        <div className="Footer_background">
            <Row >
                <Col className="footer_section1">


                    <div className="footers">
                        <div className="footer_div1">
                            <p className="footer_h mb-1">COMPANY</p>
                            <p>
                                About Us
                                Sell With Us
                                Our Sellers
                            </p>
                        </div>
                    </div>
                    <div >
                        <div className="footer_div2">
                            <p className="footer_h mb-1">CUSTOMER SERVICE</p>
                            <p>
                                Help and FAQs
                                Exchange and Returns Policy
                                Privacy Policy
                                Terms and Conditions
                            </p>
                        </div>
                    </div>
                    <div >
                        <div className="footer_div3">
                            <p className="footer_h mb-1">OUR STORES</p>
                            <p>
                                Stores and Services
                                Location and Hours
                                Catalogs
                            </p>
                        </div>

                    </div>


                    <div>
                        <div className="footer_div4">
                            <p className="footer_h mb-1">Subscribe Newsletter</p>

                            <div className="footer_Side">
                                <InputGroup size="sm">
                                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Enter your email address" />
                                </InputGroup>

                                <Button variant="primary ms-1" size="sm">
                                    &nbsp;&nbsp;Submit&nbsp;&nbsp;
                                </Button>
                            </div>

                        </div>
                    </div>



                </Col>

                <Row >
                    <Col className="Second_fsection">
                        <div className="f_two">
                            <div className="f_two1">
                                <CallOutlinedIcon />
                                <p>1800 420 0707</p>
                            </div>
                            <div className="f_two1">
                                <h6 style={{ fontSize: '20px', fontWeight: '' }}>@</h6>
                                <p>customercare@company.com</p>
                            </div>
                        </div>

                        <div md={3}>
                            <div className="f_two1">
                                <AddLocationOutlinedIcon />
                                <p>Address line 1</p>
                            </div>
                            <p className="ms-4"> Address line 2</p>
                        </div>
                        <div className="alignm">
                            <FacebookIcon />
                            <PlayArrowIcon />
                            <LinkedInIcon />
                            <TwitterIcon />
                        </div>
                    </Col>

                </Row>

            </Row>

            <Row>
                <Col>
                    <div className="last_footer">
                        <p >
                            Copyrights © 2021 Company Ltd. All rights reserved.
                        </p>
                    </div>
                </Col>

            </Row>
        </div>
    )
}

export default Footer