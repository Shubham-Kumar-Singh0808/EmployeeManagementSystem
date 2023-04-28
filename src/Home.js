import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Post from './FetchPostCall';
import CRUD from './Crud';

// const createTodo = async (todo) => {
//   const Shubham = {
//     method: 'POST',
//     body: JSON.stringify(todo),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   }
//   const s = await fetch('https://jsonplaceholder.typicode.com/posts', Shubham)
//   const response = await s.json()
//   return response
// }
// const mainFunc = async () => {
//   let todo = {
//     title: 'Shubham',
//     body: 'Singh',
//     Id: 8,
//   }
//   let todor = await createTodo(todo)
//   console.log(todor)
//   // console.log(todo)
// }
// mainFunc()



const Home = () => {
  return (
    <>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/" >Shubham</Navbar.Brand>
            <Nav className="me-auto ">
              <NavLink to={"/"} style={{ color: "white", textDecoration: "none", paddingLeft: "500px" }}>Home</NavLink>
              <NavLink to={"/about"} style={{ color: "white", textDecoration: "none", paddingLeft: "50px" }}>AboutUs</NavLink>
              <NavLink to={"/contact"} style={{ color: "white", textDecoration: "none", paddingLeft: "50px" }}>ContactUs</NavLink>

            </Nav>
          </Container>
        </Navbar>
      </div>
      <div>
        <CRUD />
      </div>





    </>
  )
}

export default Home
