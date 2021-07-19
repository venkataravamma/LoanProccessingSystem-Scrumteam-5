import React, { Component } from "react";
import { Button, Input, form, InputAdornment } from "@material-ui/core";
import DialpadIcon from "@material-ui/icons/Dialpad";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import axios from "axios";

const classes = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adminName: "",
      adminContact: "",
    };
    this.submitHandler=this.submitHandler.bind(this);
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://localhost/8282/admin/add", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { adminName, adminContact } = this.state;

    return (
      <div
        className="container border"
        style={{
          marginTop: "50px",
          width: "50%",
          color: "#f1f1f1",
          backgroundColor: "#222",
        }}
      >
        <h1 style={{ marginTop: "25px" }}>Admin Form</h1>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={this.submitHandler}
          style={{ margin: "25px 85px 75px 100px" }}
        >
          <div>
            <Input
              type="text"
              id="standard-basic"
              placeholder="Enter Your Name"
              value={adminName}
              name="adminName"
              onChange={this.changeHandler}
              style={{ color: "#f1f1f1" }}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
              required
            />
          </div>
          <br />
          <div>
            <Input
              type="number"
              id="standard-basic"
              placeholder="Enter  Contact Number"
              name="adminContact"
              value={adminContact}
              onChange={this.changeHandler}
              style={{ color: "#f1f1f1" }}
              startAdornment={
                <InputAdornment position="start">
                  <DialpadIcon />
                </InputAdornment>
              }
              required
            />
          </div>
          <br />
          
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              type="submit"
              style={{marginRight: '5%'}}
              className={classes.button}
              startIcon={<SaveIcon />}
            >
              Submit
            </Button >
            <Button
              variant="outlined"
              color="primary"
              href="#outlined-buttons"
              type="reset"
              onClick={() => {
                this.setState({ adminName: "", adminContact: "" });
              }}
            >
              Clear
            </Button>
          
        </form>
      </div>
    );
  }
}
export default Admin;
