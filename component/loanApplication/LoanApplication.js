import React from "react";
import { Input, form,MenuItem,FormControl,Select ,TextField} from "@material-ui/core"
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  textField:{
    minWidth: 280
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));


export default function LoanApplication() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    applicationDate: "",
    customer: { userId: " " },
    loanAppliedAmount: " ",
    loanApprovedAmount: " ",
    loanVerificationManagerApproval: "",
    adminApproval: "",
    status: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    <div
      className="container border"
      style={{
        marginTop: "50px",
        width: "50%",
        color: "Black",
        backgroundColor:"Green"
       }}
    >
      <h1 style={{ marginTop: "25px" }}>Loan Application Form</h1>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        style={{ margin: "25px 85px 75px 100px" }}
      >
        <div>
          <TextField
            id="date"
            label="Applied Date"
            type="Date"
            className={classes.textField}
            value={values.applicationDate}
            onChange={handleChange("applicationDate")}
            style={{ color: "#f1f1f1" }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div><br />
        <div>
          <Input
            type="number"
            id="standard-basic"
            placeholder="Enter Your Customer userId"
            value={values.customer.userId}
            className={classes.textField}
            onChange={handleChange("customer.userId")}
            style={{ color: "#f1f1f1" }}
            required
          />
        </div>
        <br />
        <div>
          <Input
            type="number"
            id="standard-basic"
            placeholder="Enter Your  loanAppliedAmount"
            value={values. loanAppliedAmount}
            className={classes.textField}
            onChange={handleChange(" loanAppliedAmount")}
            style={{ color: "#f1f1f1" }}
            required
          />
        </div>{" "}
        <br />
        <div>
          <TextField
            type="number"
            id="standard-basic"
            label="optional"
            defaultValue="0.00"
            value={values.loanApprovedAmount}
            className={classes.textField}
            onChange={handleChange("loanApprovedAmount")}
            style={{ color: "#f1f1f1" }}
            optinal
          />
        </div>{" "}
        <br />
        <div>
          <TextField
            type="boolean"
            id="standard-basic"
            label="optional"
            defaultValue="false"
            value={values.loanVerificationManagerApproval}
            className={classes.textField}
            onChange={handleChange(" loanVerificationManagerApproval")}
            style={{ color: "#f1f1f1" }}
            optinal
          />
        </div>{" "}
        <br />
        <div>
          <TextField
            type="boolean"
            id="standard-basic"
            label="optional"
            defaultValue="true"
            value={values.adminApproval}
            className={classes.textField}
            onChange={handleChange("  adminApproval")}
            style={{ color: "#f1f1f1" }}
            
          />
        </div>
        <br />
        <div>
       
         <FormControl className={classes.formControl}>
            <Select
              value={values.status}
              onChange={handleChange("status")}
              displayEmpty
              style={{ color: "#f1f1f1" }}
              className={classes.selectEmpty}
              className={classes.textField}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value=""><em>WAITING_FOR_APPROVAL</em></MenuItem>
              <MenuItem value={'PENDING'}>PENDING</MenuItem>
              <MenuItem value={'APPROVED'}>APPROVED</MenuItem>
              <MenuItem value={'REJECTED'}>REJECTED</MenuItem>
              <MenuItem value={'DOCUMENTS_NOT_UPLOADED'}>DOCUMENTS_NOT_UPLOADED</MenuItem>
              <MenuItem value={'DOCUMENTS_UPLOADED'}>DOCUMENTS_UPLOADED</MenuItem>
            </Select>
          </FormControl>
        </div> 
      </form>
    </div>
  );
}
