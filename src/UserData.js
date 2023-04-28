import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Table from 'react-bootstrap/Table';

function UserData() {
    const [Listdata, setListData] = useState([])
    const getDetails = () => {
        fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json())
            .then((table) => {
                console.log(table)
                setListData(table)
            })
    }
    useEffect(() => {
        getDetails();
    }, [])
    return (
        <>
            <div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        Listdata.map((curUser, i) => {
                            const { id, name, username, email, website } = curUser;
                            const { street, city, zipcode } = curUser.address;

                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{username}</td>
                                    <td>{email}</td>
                                    <td>{street}, {city}, {" "}, {zipcode}</td>
                                    <td>{website}</td>
                                </tr>
                            )
                        })
                       }
                       
                    </tbody>
                </Table>
               
            </div>
        </>
    )
}

export default UserData;