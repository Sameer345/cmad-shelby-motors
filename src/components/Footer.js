import React, { Component } from 'react';
import Logo from "./images/shelby3.png";
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import AboutUs from "./AboutUs";
import ContactUs from "./Contactus";
import Showroom from "./showroom";
import { Link } from "react-router-dom";
import { NONAME } from 'dns';
import { whileStatement } from '@babel/types';
import Modal from "react-modal";
import "../components/Styling/FooterStyle.css";

class Footer extends Component {
    constructor() {
        super()
        this.state = {
            isActive: false
        }


    }

    render() {

        return (
            <div>
                <Container fluid style={{ backgroundColor: "black ", color: "white" }} >
                    <Row >
                        <Col lg="3" md="6" sm="6" style={{ marginTop: "1%" }}>
                            <img src={Logo} height="65px" width="170px" />
                            <p> <b>Shelby</b> is an exclusive motorbike portal, which aims to   focus on bikes.
                                It’s a complete online portal not only
                                providing the latest news and updates about bike industry
                                but also  providing an opportunity for used motorbike buyer...
                            </p>
                            <Button color="danger"><Link to="About" style={{ color: "white", textDecoration: "none" }}>Read More </Link></Button>
                        </Col>
                        <Col lg="3" md="6" sm="6" style={{ marginTop: "1%" }}>
                            <h2 style={{ color: "white" }}>Quick Links</h2>
                            <ul>
                                <li ><Link to="/" className="QuickList">Home </Link></li>
                                <li><Link to="About" className="QuickList">About</Link></li>
                                <li><Link to="Contact" className="QuickList">Contact</Link></li>
                                <li><Link to="Showroom" className="QuickList" >Showrooms</Link></li>
                            </ul>

                        </Col>

                        <Col lg="3" md="6" sm="6" style={{ marginTop: "1%" }}>
                            <h2 style={{ color: "white" }}>Contact Us</h2>
                            <p><strong>Addrress:</strong> Shop No. 3 & 4 Jinnah Market Khayaban-e-Jami,
                                Phase II Exist, Near DHA Suffa
                                University, DHA, Karachi, Pakistan</p>
                            <p><strong>Email:</strong> Shelbymotors@gmail.com</p>
                            <p><strong>Phone:</strong> 0315-2646017</p>
                        </Col>
                        <Col lg="3" md="6" sm="6" style={{ marginTop: "1%" }}>
                            <h2 style={{ color: "white" }}>Social Links</h2>
                            <ul style={{ textDecorationLine: "none" }}>

                                <li><a href="https://www.facebook.com/ebike.pk/" target="_blank" ><i class="fa fa-2x fa-facebook "></i></a> </li>
                                <li><a href="https://twitter.com/hashtag/ebike?lang=en" target="_blank"><i class="fa fa-2x fa-twitter "></i></a> </li>
                                <li><a href="https://www.instagram.com/explore/tags/ebike/" target="_blank"><i class="fa fa-2x fa-instagram"></i></a> </li>
                                <li><a href="https://www.youtube.com/channel/UCnR7bivUZs5Q9lHGnQ2u6gg" target="_blank"><i class="fa fa-2x fa-youtube "></i></a> </li>

                            </ul>
                        </Col>
                    </Row >
                    <p className="End">© 2019 Copyright by Shelbymotors All rights reserved.</p>
                    <p className="End">Made by Muhammad Sameer Siddiqui.</p>

                </Container >



            </div>








        )
    }


}


export default Footer;












