import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IoCallOutline } from "react-icons/io5";
import Card from 'react-bootstrap/Card';
// import { useSpring, animated } from 'react-spring';
// import '../styles/Home.module.css'


import '../styles/Home.module.css';

function Pageone() {


    return (
        <div style={{ backgroundColor: 'black' }}>
            <div>
                <Navbar bg="black" data-bs-theme="dark">
                    <Navbar.Brand>
                        <img
                            src='./logo.png'
                            width="100"
                            height="100"
                            className="d-inline-block align-top"
                            style={{ marginLeft: '20px' }}
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Nav className="me-auto" style={{ marginLeft: '920px', color: 'white' }}>
                        <Nav.Link href="#home" style={{ color: 'white' }}>Home</Nav.Link>
                        <Nav.Link href="#features" style={{ color: 'white' }}>Services</Nav.Link>
                        <Nav.Link href="#about" style={{ color: 'white' }}>About Us</Nav.Link>
                        <Nav.Link href="#contact" style={{ color: 'white' }}>Contact Us</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
            <div style={{ display: 'flex', paddingTop: '40px', justifyContent: 'space-evenly' }}>
                {/* <div style={{ color: 'white', fontSize: '65px', marginLeft: '20px', paddingTop: '80px', fontWeight: 'bold' }}>
          Transforming Idea Into
          <br />
          <span style={{ color: 'orange' }}>Powerful Solutions</span>
          <br />
          <p style={{ fontSize: '15px' }}>
            FOR STARTUPS AND GROWING BUSINESSES, WEB AND MOBILE SOLUTIONS, CLOUD ENTERPRISE, AND DYNAMIC
            <br />
            DIGITAL MARKETING STRATEGIES, PARTNER WITH US FOR A TRANSFORMATIVE JOURNEY INTO THE DIGITAL REALM.
          </p>
        </div>  */}
                <div style={{ color: 'white', paddingLeft: '35px', paddingTop: '80px' }}>
                    <h1 style={{ fontWeight: 'bold', fontSize: '60px' }}>Transforming Idea</h1>
                    <h1 style={{ fontWeight: 'bold', fontSize: '60px' }}>Into <span style={{ color: 'orange' }}>Powerful Solutions</span></h1>


                    <p style={{ fontSize: '13px' }}>
                        FOR STARTUPS AND GROWING BUSINESSES, WEB AND MOBILE SOLUTIONS, CLOUD ENTERPRISE, AND DYNAMIC
                        <br />
                        DIGITAL MARKETING STRATEGIES, PARTNER WITH US FOR A TRANSFORMATIVE JOURNEY INTO THE DIGITAL REALM.
                    </p>

                    <InputGroup style={{ width: '275px' }}>
                        <InputGroup.Text id="basic-addon1" style={{ backgroundColor: 'orange' }}> <IoCallOutline /></InputGroup.Text>
                        <Form.Control
                            placeholder="Get a Free Consultant"
                            aria-label="Username"
                            aria-describedby="basic-addon1"

                        />
                    </InputGroup>

                </div>

                <img
                    src='./image1.png'
                    width="600"
                    height="450"
                    className="d-inline-block align-top"
                    style={{ marginLeft: '20px' }}
                    alt="Description of the image"
                />

            </div>
            <hr style={{ border: '3px solid black', background: 'linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)', paddingTop: '7px', marginTop: '100px' }} />


            <div style={{ display: 'flex', paddingTop: '70px', justifyContent: 'space-evenly' }}>
                <div style={{ color: 'white', paddingLeft: '35px' }}>
                    <h1>We provide the best web services</h1><br />
                    <p style={{ fontSize: '15px' }}>At our core, we specialize in delivering unparalleled web services, combining innovation <br /> and expertise to exceed your expectations.
                        Empower your business with the best-in-class <br />web services tailored to your  unique needs, ensuring success in the digital landscape.
                    </p><br />
                    <small>MOST EASY PREMIUM WEB DESIGN PROCESS</small><br />
                    <small>RESEARCH & DEVELOPMENT BEFORE STARTING</small><br />
                    <small>MAKING A QUALITY DESIGN IDEAS</small><br />
                    <small>MAKING A QUALITY DESIGN IDEAS</small><br />
                    <small>MAKING A QUALITY DESIGN IDEAS</small>

                </div>
                <img
                    src='./image2.png'
                    width="600"
                    height="450"
                    className="d-inline-block align-top"
                    style={{ marginLeft: '20px' }}
                    alt="Description of the image"
                />
            </div>
            <br /><br /><br /><br />

            <div>
                <div style={{ textAlign: 'center', justifyContent: 'center', color: 'white' }}>
                    <h1 style={{ fontWeight: 'bold', fontSize: '55px' }}>Services We're Offering</h1>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '80px' }}>
                    <Card style={{ width: '30rem', height: '280px', borderRadius: '25px', background: 'linear-gradient(to right, #434343 0%, black 100%)' }}>
                        <Card.Body>
                            <img src='./webdesign.png' style={{ height: '100px', width: '100px' }} /> <br /><br />
                            <Card.Title style={{ color: 'white' }}>Web Design</Card.Title>

                            <Card.Text style={{ color: 'white' }}>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '30rem', height: '280px', borderRadius: '25px', background: 'linear-gradient(to top, rgba(255,255,255,0.1) 0%, rgba(143,152,157,0.60) 100%)' }}>
                        <Card.Body>
                            <img src='./mobileapplication.png' style={{ height: '100px', width: '100px' }} /> <br /><br />
                            <Card.Title style={{ color: 'white' }}>Web/Mobile Application</Card.Title>

                            <Card.Text style={{ color: 'white' }}>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '80px' }}>
                    <Card style={{ width: '30rem', height: '280px', borderRadius: '25px', background: 'linear-gradient(to top, rgba(255,255,255,0.1) 0%, rgba(143,152,157,0.60) 100%)' }}>
                        <Card.Body>
                            <img src='./seo.png' style={{ height: '100px', width: '100px' }} /> <br /><br />
                            <Card.Title style={{ color: 'white' }}>SEO</Card.Title>

                            <Card.Text style={{ color: 'white' }}>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '30rem', height: '280px', borderRadius: '25px', background: 'linear-gradient(to right, #434343 0%, black 100%)' }}>
                        <Card.Body>
                            <img src='./digitalmarketing.png' style={{ height: '100px', width: '100px' }} /> <br /><br />
                            <Card.Title style={{ color: 'white' }}>Digital Marketing</Card.Title>

                            <Card.Text style={{ color: 'white' }}>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '80px' }}>
                    <Card style={{ width: '30rem', height: '280px', borderRadius: '25px', background: 'linear-gradient(to right, #434343 0%, black 100%)' }}>
                        <Card.Body>
                            <img src='./devops.png' style={{ height: '100px', width: '100px' }} /> <br /><br />
                            <Card.Title style={{ color: 'white' }}>Dev Ops</Card.Title>

                            <Card.Text style={{ color: 'white' }}>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{
                        width: '30rem', height: '280px', borderRadius: '25px',
                        background: 'linear-gradient(to top, rgba(255,255,255,0.1) 0%, rgba(143,152,157,0.60) 100%)'
                    }}>
                        <Card.Body>
                            <img src='./datascience.png' style={{ height: '100px', width: '100px' }} /> <br /><br />
                            <Card.Title style={{ color: 'white' }}>Data Science</Card.Title>

                            <Card.Text style={{ color: 'white' }}>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
            </div>
            <br /><br /><br /><br />


            <div>
                <div style={{ textAlign: 'center', justifyContent: 'center', color: 'white' }}>
                    <h1 style={{ fontWeight: 'bold', fontSize: '55px' }}>Contact Us</h1>
                </div>
                <div style={{ justifyContent: 'space-around', display: 'flex', paddingTop: '40px' }}>
                    <img
                        src='./image3.png'
                        width="500"
                        height="600"
                        className="d-inline-block align-top"
                        style={{ marginLeft: '20px' }}
                        alt="Description of the image"
                    />

                    <div style={{ marginTop: '30px' }}>
                        <form style={{ maxWidth: '400px', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>

                            <label style={{ display: 'block', marginBottom: '8px', color: 'white' }} htmlFor="name">Name:</label>
                            <input style={{ width: '400px', padding: '8px', marginBottom: '16px', border: '1px solid #ccc', borderRadius: '4px', background: 'linear-gradient(to right, #434343 0%, black 100%)' }}
                                type="text" id="name" name="name" placeholder="Enter Name" required />

                            <label style={{ display: 'block', marginBottom: '8px', color: 'white' }} htmlFor="email">Email:</label>
                            <input style={{ width: '400px', padding: '8px', marginBottom: '16px', border: '1px solid #ccc', borderRadius: '4px', background: 'linear-gradient(to right, #434343 0%, black 100%)' }}
                                type="email" id="email" name="email" placeholder="Enter Email" required />

                            <label style={{ display: 'block', marginBottom: '8px', color: 'white' }} htmlFor="phone">Phone:</label>
                            <input style={{ width: '400px', padding: '8px', marginBottom: '16px', border: '1px solid #ccc', borderRadius: '4px', background: 'linear-gradient(to right, #434343 0%, black 100%)' }}
                                type="tel" id="phone" name="phone" placeholder="Enter Phone" required />

                            <input style={{ width: '400px', padding: '8px', marginTop: '10px', background: 'linear-gradient(to right, #ff758c 0%, #ff7eb3 100%)', color: 'white', cursor: 'pointer' }} type="submit" value="Contact" />
                        </form>
                    </div>

                </div>
            </div>

            <div style={{marginTop: '150px', marginLeft: '540px', paddingBottom: '60px'}}>
                    <h6 style={{color:'white', fontWeight: 'bold'}}>Copyright © 2021 Micro Technologies All Right Reserved</h6>
            </div>

        </div>
    );
}

export default Pageone;
