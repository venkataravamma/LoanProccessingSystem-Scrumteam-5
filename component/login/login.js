import { Button, Col, Container, Form, Row, option } from "react-bootstrap";
import React from 'react';
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import axios from "axios";
import {toast} from "react-toastify";
import { useState } from "react";
import { Redirect } from "react";

export default function Login() {
  const [ emailId, setEmailId ] = useState("");
	const [ password, setPassword ] = useState("");
  const [role , setRole]=useState("");
	const [ isLoggedin, setIsLoggedIn ] = useState(localStorage.getItem("loggedin"));
  
function handleSubmit (e) {
    e.preventDefault();
    if (role === "admin" ) {
			localStorage.setItem("loggedin", 1);
			setIsLoggedIn(1);
      const data = {
        emailId , 
        password ,
        role ,
      };
  
     axios.post("http://localhost:8282/user/adduserasadmin",data,{headers: {'Access-Control-Allow-Origin': '*'}} )
      
        .then(res => console.log(res),
        toast.success("Message sent successfully",{position: toast.POSITION.TOP_RIGHT}))
        .catch(err => console.log(err),toast.error("something went wrong",{position: toast.POSITION.TOP_RIGHT}));
		}else if((role === "loanManager" )) {
      localStorage.setItem("loggedin", 2);
			setIsLoggedIn(2);
      const data = {
        emailId ,
        password ,
        role ,
      };
      axios
        .post("http://localhost:8282/user/adduserasloanmanager", data)
        .then(res => console.log(res),
        toast.success("Message sent successfully",{position: toast.POSITION.TOP_RIGHT})
        ).catch(err => console.log(err),toast.error("something went wrong",{position: toast.POSITION.TOP_RIGHT}));

   }else if((role === "customer" )) {
    localStorage.setItem("loggedin", 3);
    setIsLoggedIn(3)
    const data = {
      emailId,
      password,
      role,
    };
    axios
      .post("http://localhost:8282/api/demo/user/adduserascustomer", data)
      .then(res => console.log(res),
      toast.success("Message sent successfully",{position: toast.POSITION.TOP_RIGHT}))
      .catch(err => console.log(err),
      toast.error("something went wrong",{position: toast.POSITION.TOP_RIGHT}));

   }else if((role === "user" )) {
    localStorage.setItem("loggedin", 4);
    setIsLoggedIn(4)
    const data = {
      emailId,
      password,
      role,
    };
    axios
      .post("https://localhost:8282/user/signin", data)
      .then(res => console.log(res),
      toast.success("Message sent successfully",{position: toast.POSITION.TOP_RIGHT}))
      .catch(err => console.log(err),toast.error("something went wrong",{position: toast.POSITION.TOP_RIGHT}));

   } else{
    alert("Wrong username/password");
   }
  }
   
    

  return (
    <>
      <Container className="mt-5">
        <AccountCircleRoundedIcon color="primary" style={{ fontSize: 130 }} />
        <Row className="mt-5">
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg">
            <Form onSubmit={handleSubmit} className="post">
              <Form.Group >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" placeholder="Enter email" id="emailId" value={emailId} onChange={(e) => setEmailId(e.target.value)}/>
              </Form.Group>

              <Form.Group >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
              </Form.Group>
              <Form.Group >
                <Form.Label>Select Role Type</Form.Label>
                <Form.Control as="select" id="role" value={role} onChange={(e) => setRole(e.target.value)}>
                   <option>None</option>
                  <option>admin</option>
                  <option>loanManager</option>
                  <option>customer</option>
                  <option>user</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
              {isLoggedin ===1  && <Redirect to="/admin" />}
              {isLoggedin ===2  && <Redirect to="/loanManager" />}
              {isLoggedin ===3  && <Redirect to="/customer" />}
              {isLoggedin ===4  && <Redirect to="/customer" />}
              
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
