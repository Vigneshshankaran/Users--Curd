import React,{useState,useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useParams,useNavigate} from 'react-router-dom';

function EditUsers(props) {



 
    let params = useParams();
    let navigate = useNavigate();
    let [name,setName]=useState("");
    let [email,setEmail]=useState("");
    let [mobile,setMobile]=useState("");
    let [cls,setCls]=useState("");

    useEffect(()=>{
        if(params.id<props.data.users.length)
        {
            getData();
        }
        else
        {
            alert("Selected users is Not available") 
        }
    },[])

    let getData = ()=>{
        setName(props.data.users[params.id].name)
        setEmail(props.data.users[params.id].email)
        setMobile(props.data.users[params.id].mobile)
        setCls(props.data.users[params.id].class)
    }

    let handleSubmit = ()=>{
        let newData = {name,email,mobile,"class":cls};
        let newArray = [...props.data.users];
        newArray.splice(params.id,1,newData)
        props.data.setusers(newArray)
        navigate("/all-users")

    }


    return (
        <Form>

            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control value={name} type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control value={email} type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Mobile</Form.Label>
                <Form.Control value={mobile} type="text" placeholder="Mobile" onChange={(e)=>setMobile(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Monthly Earnings</Form.Label>
                <Form.Control value={cls} type="text" placeholder="Monthly Earnings" onChange={(e)=>setCls(e.target.value)}/>
            </Form.Group>
  
            <Button variant="primary" onClick={handleSubmit}>
                Update
            </Button>
        </Form>
    )
}

export default EditUsers
