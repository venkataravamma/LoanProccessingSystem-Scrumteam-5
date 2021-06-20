package com.loan.app.controller;

import java.util.logging.Level;
import java.util.logging.Logger;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.loan.app.entities.LoanApplication;
import com.loan.app.exception.InvalidLoanApplicationException;
import com.loan.app.service.LoanVerificationManagerService;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiOperation;

	/*  loan Verification manager REST Controller
	 *  loan Verification controller contain a single method to alter the loan application
	 *  "/home" is to check the home page 
	 *  "/loan verification status"is a method the update the status of the loan application along 
	 *  with other field officer find important to change
	 *  
	 *  Author : Gaurav Shrivastava 
	 * */

	@Validated
	@RestController
	@RequestMapping("/loanverify")
	@ApiModel(value="Loan Verification Controller", description = "Holds all APIs related to the   lone")
 public class  LoanVerificationManagerController {
		
		Logger logger = Logger.getLogger( LoanVerificationManagerController.class.getName());
		@Autowired
		private  LoanVerificationManagerService service;
		
		//Method to check the working of rest controller in the console
		public  LoanVerificationManagerController() {
			logger.log(Level.INFO,"-----> Loan verification Rest Controller Working!");
			
		}
		
		//Method to check the connection with the webservice
		@GetMapping("/home")
		public String homeRequest() {
			return "Welcome : Home Loan Application (Version 1.0)"; //returns String value
		}

		
		@ApiOperation(value="PUT mapping for the Finance Verification to update the status of application",response= LoanVerificationManagerController.class)
		@PutMapping("/financestatus")
		//Method to update the status of application and loan amount if approved, passes the parameters of application class
		public LoanApplication updateStatus(@RequestBody @Valid LoanApplication loanapplication) throws InvalidLoanApplicationException {
			
			return this.service.updateStatus(loanapplication);  //returns the updated loan application
		}

	}

