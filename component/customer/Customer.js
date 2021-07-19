import {
  form,
  Input,
  TextField,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  InputLabel,
  FormControl,
  Select,
  Radio,
  MenuItem,
  InputAdornment,
  Button
} from "@material-ui/core";
import Axios from "axios";
import DialpadIcon from "@material-ui/icons/Dialpad";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";

import React from "react";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
  },
  button: {
    margin: theme.spacing(1),
  },
  textField: {
    minWidth: 210,
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Customer() {
  const classes = useStyles();
  const [customer, setCustomer] = React.useState({
    customerName: "",
    mobileNumber: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    aadharNumber: "",
    panNumber: "",
  });
 
 function onCreateHandler(e){
   e.preventDefault();

    Axios.post(`http://localhost:8282/customer/add`, {
      customerName: customer.customerName,
      mobileNumber: customer.mobileNumber,
      dateOfBirth: customer.dateOfBirth,
      gender: customer.gender,
      nationality: customer.nationality,
      aadharNumber: customer.aadharNumber,
      panNumber: customer.panNumber,
    }).then((response) => {
      console.log(response.data);
    },(error)=> {
      //for error
      console.log(error);
    });
  };
  
  
  const handleChange = (prop) => (event) => {
    setCustomer({ ...customer, [prop]: event.target.value });
    console.log(customer);
  };
  return (
    <div
      className="container border"
      style={{
        marginTop: "50px",
        width: "50%",
        color: "blue",
        backgroundImage: `url('https://th.bing.com/th/id/OIP.sjswRqGlrvvNk-HJoKNFSgHaEK?pid=ImgDet&rs=1')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h1 style={{ marginTop: "25px" }}>CustomerForm</h1>
      <form     
        className={classes.root}
    
        onSubmit={(e)=>onCreateHandler(e)}
          style={{ margin: "25px 85px 75px 100px" }}
      >
        <div>
          <Input
            type="text"
            id="standard-basic"
            placeholder="Enter Your Name"
            label="Required"
            value={customer.customerName}
            onChange={handleChange("customerName")}
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
            placeholder="Enter Your Number"
            value={customer.mobileNumber}
            onChange={handleChange("mobileNumber")}
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
        <div>
          <TextField
            id="date"
            label="dateOfBirth"
            type="date"
            className={classes.textField}
            value={customer.dateOfBirth}
            onChange={handleChange("dateOfBirth")}
            style={{ color: "#f1f1f1" }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div>
          <FormControl className={classes.formControl}>
            <FormLabel component="legend" style={{ color: "#f1f1f1" }}>
              Gender
            </FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={customer.gender}
              onChange={handleChange("gender")}
              style={{ color: "#f1f1f1" }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel
              id="demo-simple-select-helper-label"
              style={{ color: "#f1f1f1" }}
            >
              nationality
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={customer.nationality}
              onChange={handleChange("nationality")}
              style={{ color: "#f1f1f1" }}
              className={classes.textField}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Indian"}>Indian</MenuItem>
              <MenuItem value={"French"}>French</MenuItem>
              <MenuItem value={"English"}>English</MenuItem>
              <MenuItem value={"Chinese"}>Chinese</MenuItem>
              <MenuItem value={"English"}>Japanese</MenuItem>
            </Select>
          </FormControl>
        </div><br />
        <div>
          <Input
            type="number"
            id="standard-basic"
            placeholder="Enter Your aadharNumber"
            className={classes.textField}
            value={customer.aadharNumber}
            onChange={handleChange("aadharNumber")}
            style={{ color: "#f1f1f1" }}
            required
          />
        </div><br/>
        <div>
          <Input
            type="number"
            id="standard-basic"
            placeholder="Enter Your panNumber"
            className={classes.textField}
            value={customer.panNumber}
            onChange={handleChange("panNumber")}
            style={{ color: "#f1f1f1", fontSize: "15px bold" }}
            required
          />
        </div><br/>
        <div>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            type="submit"
            className={classes.button} 
            startIcon={<SaveIcon />}
           >
            Submit
          </Button>
          <Button variant="outlined" color="primary" href="#outlined-buttons" type="reset" onClick={()=>{setCustomer({customerName: "",
    mobileNumber: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    aadharNumber: "",
    panNumber: "",})}}>
            Clear
          </Button>
        </div>
      </form>
    </div>
  );
}
