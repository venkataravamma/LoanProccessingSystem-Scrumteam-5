import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User= () => {
    const [user, setUser] = useState({
        customerName: "",
        mobileNumber: "",
        dateOfBirth: "",  
        gender: "",
        nationality: "",
        aadharNumber: "",
        panNumber: ""
      });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">customerName: {user.customerName}</li>
        <li className="list-group-item">mobileNumber: {user.mobileNumber}</li>
        <li className="list-group-item">dateOfBirth: {user.dateOfBirth}</li>
        <li className="list-group-item">gender: {user.gender}</li>
        <li className="list-group-item">nationality: {user.nationality}</li>
        <li className="list-group-item">aadharNumber: {user.aadharNumber}</li>
        <li className="list-group-item">panNumber: {user.panNumber}</li>
         </ul>
    </div>
  );
};

export default User;
        