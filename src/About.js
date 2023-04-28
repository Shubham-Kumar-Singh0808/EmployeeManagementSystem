import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './index.css'
import DataTable from './DataTable';




const About = () => {


    const formData = JSON.parse(localStorage.getItem('formData'));
    

    return (
        <>
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">Shubham</Navbar.Brand>
                        <Nav className="me-auto ">
                            <NavLink to={"/"} style={{ color: "white", textDecoration: "none", paddingLeft: "500px" }}>Home</NavLink>
                            <NavLink to={"/about"} style={{ color: "white", textDecoration: "none", paddingLeft: "50px" }}>AboutUs</NavLink>
                            <NavLink to={"/contact"} style={{ color: "white", textDecoration: "none", paddingLeft: "50px" }}>ContactUs</NavLink>

                        </Nav>
                    </Container>
                </Navbar>
            </div>
            <div>
                <div className='sh2'>
                    <h1>User Input:</h1>
                    <h5>Name: {formData.name}</h5>
                    <h5>Email: {formData.email}</h5>
                    <h5>Phone: {formData.phone}</h5>
                    <h5>Age: {formData.age}</h5>
                    <h5>Address: {formData.address}</h5>
                    <h5>Gender: {formData.gender}</h5>
                </div>
            </div>

            <div className='sh3'>
               <DataTable />
            </div>

        </>
    )
}

export default About
