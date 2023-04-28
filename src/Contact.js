import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import './index.css'



const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('');
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);

        if (form.checkValidity() === true) {
            event.preventDefault();
            const formData = {
                name: name,
                email: email,
                phone: phone,
                age: age,
                address: address,
                gender: gender
            };
            localStorage.setItem('formData', JSON.stringify(formData));
            setName('');
            setEmail('');
            setPhone('');
            setAge('');
            setAddress('');
            setGender('');
        }
    };



    return (
        <>

            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">Shubham</Navbar.Brand>
                        <Nav className="me-auto ">
                            <NavLink to={"/"} style={{color: "white",textDecoration:"none",paddingLeft:"500px"}}>Home</NavLink>
                            <NavLink to={"/about"} style={{color: "white",textDecoration:"none",paddingLeft:"50px"}}>AboutUs</NavLink>
                            <NavLink to={"/contact"} style={{color: "white",textDecoration:"none",paddingLeft:"50px"}}>ContactUs</NavLink>

                        </Nav>
                    </Container>
                </Navbar>
            </div>
            <div className='sh'>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid name.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid email.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="phone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter phone number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid phone number.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="age">
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            placeholder="Enter age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid age.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid address.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="gender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control
                            required
                            as="select"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <option value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            Please select a gender.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <div className='pt-3'>
                        <Button variant="primary" type="submit" className='sh1 button-71'>
                            Submit
                        </Button>
                    </div>
                </Form>

            </div>

        </>
    )
}

export default Contact
