import React from "react";
import { Table } from "react-bootstrap";


const ArrayMap  = () => {

    const users = [
        {name:"Amit", email:"amit@mail.com"},
        {name:"Aks", email:"aks@mail.com"},
        {name:"Sharma", email:"sharma@mail.com"}
    ];

    return(
        <>
            <h1>Array Map, Bootstrap Examples</h1>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map((item, i)=>
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                        </tr>
                    )
                }
                </tbody>
            </Table>
        </>
    );

}

export default ArrayMap;