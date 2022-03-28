import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import {Link,useNavigate} from 'react-router-dom'

function AllUsers(props) {

    let navigate = useNavigate();
    let handleDelete = (i)=>{
        let newArray = [...props.data.users]
        newArray.splice(i,1);
        props.data.setUsers(newArray)
    }

    return <>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Monthly Earnings</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.users.map((e,i)=>{
                        return <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{e.name}</td>
                                    <td>{e.email}</td>
                                    <td>{e.mobile}</td>
                                    <td>{e.earnings}</td>
                                    <td><Button variant='danger' onClick={()=>handleDelete(i)}>Delete</Button>
                                    <span>&nbsp; &nbsp;</span>
                                        <Link to={`/edit-users/${i}`}>
                                        <Button variant='primary'>Edit</Button>
                                        </Link>
                                
                                    </td>
                                </tr>
                    })
                }
            </tbody>
        </Table>
    </>
}

export default AllUsers
