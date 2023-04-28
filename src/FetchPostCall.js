import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './index.css'
import Table from 'react-bootstrap/Table';

function Post() {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [users, setUsers] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            // method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, id, phoneNo }),
        });
        const data = await response.json();
        setUsers([...users, data]);
        setName('');
        setId('');
        setPhoneNo('');
        console.log(data);
    };
   

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="id">
                            <Form.Label>ID</Form.Label>
                            <Form.Control
                                type="text"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="phoneNo">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="text"
                                value={phoneNo}
                                onChange={(e) => setPhoneNo(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" style={{ marginTop: "2%" }} className='sh1'>
                            Add User
                        </Button>
                    </Form>
                </Col>

                <Col md={6} style={{ paddingLeft: "5%" }}>

                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>PhoneNumber</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, i) => {
                                    return (
                                        <tr key={id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.phoneNo}</td>
                                        </tr>
                                    )

                                })
                            }

                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}

export default Post;