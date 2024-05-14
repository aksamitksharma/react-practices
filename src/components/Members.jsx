import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

const Members = () =>{

    const [users, setUsers] = useState([]);
    const token = "z0WSO0W5n9sw5QnjACAWcd11yCOKHUhnJwBexgxl";
    const url  = 'https://3153-2409-4043-59e-fd04-ff39-4d54-5012-3168.ngrok.io/api/skills';
    

    useEffect(()=>{
        // axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
        axios.get(url,{headers:{"Authorization":`Bearer ${token}`}}).then((results)=>console.log(results.data));
    },[]);

    return(
        <>
            <h1>API call and Demonstration</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>DOB</th>
                    <th>Location</th>
                    <th>Registeration Date</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {
                        users.map((user,i)=>
                            // console.log(user.name.first)
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{user.name.first} {user.name.last}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.dob.date}</td>
                                <td>{user.location.city}, {user.location.state}, {user.location.country}, {user.location.pincode}</td>
                                <td>{user.registered.date}</td>
                             </tr>
                        )
                    } */}
                </tbody>
                </Table>
        </>
    )
}

export default Members;