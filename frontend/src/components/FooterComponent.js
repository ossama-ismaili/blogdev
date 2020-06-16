import React from 'react';
import {Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <div className="App-footer">
           <div className="container">
               <Row>
                   <Col md={3}>
                        <h5>Community for developers</h5>
                   </Col>
                   <Col md={3}>
                        <strong>Platform</strong>
                        <ul className="list-unstyled">
                            <li>Shared inbox</li>
                            <li>Knowledge base</li>
                            <li><a href="https://www.skype.com/" rel="noopener noreferrer" target="_blank">Live chat</a></li>
                            <li><Link to="/contactus">Contact us</Link></li>
                            <li>IOS {"&"} Android</li>
                        </ul>
                   </Col>
                   <Col md={3}>
                        <strong>Learn</strong>
                        <ul className="list-unstyled">
                            <li><Link to="/help">How to use the platform</Link></li>
                            <li>Coding camp</li>
                            <li>Coding test</li>
                            <li><Link to="/help">Where I should start?</Link></li>
                        </ul>
                   </Col>
                   <Col md={3}>
                        <strong>Blog</strong>
                        <ul className="list-unstyled">
                            <li><Link to="/aboutus">About us</Link></li>
                            <li><Link to="/help">Help docs</Link></li>
                            <li>Summer program</li>
                            <li>Terms {"&"} privacy</li>
                        </ul>
                   </Col>
               </Row>

               <Row className="footer-line">
                   <Col className="text-center" md={4}>
                        <ul className="media-list">
                            <li><a href="https://www.twitter.com/" rel="noopener noreferrer" target="_blank"><span className="fa fa-twitter"></span></a></li>
                            <li><a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank"><span className="fa fa-facebook"></span></a></li>
                            <li><a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank"><span className="fa fa-linkedin"></span></a></li>
                        </ul>
                   </Col>
                   <Col className="text-center" md={8}>
                       Developed by Ossama Ismaili
                   </Col>
               </Row>
           </div>
        </div>
    );
}

export default Footer;