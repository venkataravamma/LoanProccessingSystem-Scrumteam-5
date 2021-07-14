import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
const AddUser = () => {
  let history = useHistory();
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

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
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
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
