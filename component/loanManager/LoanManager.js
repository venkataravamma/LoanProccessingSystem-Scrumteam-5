
import React , {Component} from "react";
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
  textField: {
    minWidth: 400,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

class LoanManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loanManagerName: "",
      loanManagerContact: "",
    };

  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://locanhost/8282/user/adduserasloanmanager", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { loanManagerName, loanManagerContact } = this.state;

    return (
      <div
        className="container border"
        style={{
          marginTop: "50px",
          width: "50%",
          color: "cyan",
          backgroundColor: "gray",
        }}
      >
        <h1 style={{ marginTop: "25px" }}>Loan Manager Form</h1>
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
              value={loanManagerName}
              name="loanManagerName"
              onChange={this.changeHandler}
              className={classes.textField}
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
              placeholder="Enter Contact Number"
              name="loanManagerContact"
              value={loanManagerContact}
              onChange={this.changeHandler}
              className={classes.textField}
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
                this.setState({ loanManagerName: "", loanManagerContact: "" });
              }}
            >
              Clear
            </Button>
          
        </form>
      </div>
    );
  }
}
export default LoanManager;
