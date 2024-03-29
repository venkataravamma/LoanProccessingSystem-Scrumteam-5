import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    customerName: "",
    mobileNumber: "",
    dateOfBirth: "",  
    gender: "",
    nationality: "",
    aadharNumber: "",
    panNumber: ""
  });

  const { customerName,  mobileNumber ,  dateOfBirth ,  gender ,  nationality ,  aadharNumber ,  panNumber } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="customerName"
              value={customerName}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Number"
              name=" mobileNumber"
              value={ mobileNumber}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Enter Your dateOfBirth"
              name="dateOfBirth"
              value={dateOfBirth}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div>
          <select className="form-select" aria-label="Default select example" name=" gender" value={gender}  onChange={e => onInputChange(e)} >
          <option selected> select Gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="others">others</option>
          </select>
          </div>
          <div>
          <select className="form-select" aria-label="Default select example" name="nationality" value={nationality}  onChange={e => onInputChange(e)} >
          <option selected> select nationality</option>
          <option value="Indian">Indian</option>
          <option value="American">American</option>
          <option value="japaneese">japaneese</option>
          </select>
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Your aadharNumber"
              name="aadharNumber"
              value={aadharNumber}
              onChange={e => onInputChange(e)}
            />
            </div>
            <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Your panNumber "
              name="panNumber"
              value={panNumber}
              onChange={e => onInputChange(e)}
            />
          </div>
         
          <button className="btn btn-warning btn-block">Update User</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
