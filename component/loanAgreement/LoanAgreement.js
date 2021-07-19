import React from 'react'
import { Input,form} from '@material-ui/core'
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    textField:{
        minWidth: 280
      },
  }));
export default function LoanAgreement() {
    const classes = useStyles();
  const [values, setValues] = React.useState({
    loanAgreementId: "",
    loanApplicationId: "",
     });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
 
    return (
        
    <div className="container border"
    style={{marginTop:"50px" ,
    width:"50%",
    color:"Green",
    backgroundColor: "#222"
    }}>
       <h1 style={{marginTop:'25px'}}> LoanAgreement Form</h1>
      <form className={classes.root} noValidate autoComplete="off"  style={{margin:"25px 85px 75px 100px"}}>
        <div>
          <Input
            type="number"
            id="standard-basic"
            placeholder="Enter Your loanAgreementId"
            value={values.loanAgreementId}
            className={classes.textField}
            onChange={handleChange("loanAgreementId")}
            style={{color: '#f1f1f1'}}
            required
          />
        </div><br/>
        <div>
          <Input
            type="number"
            id="standard-basic"
            placeholder="Enter Your loanApplicationId"
            value={values.loanApplicationId}
            className={classes.textField}
            onChange={handleChange("loanApplicationId")}
            style={{color: '#f1f1f1'}}
           
            required
          />
        </div> 
         <div>

         </div>
        </form>

        </div>
  
    )
}
