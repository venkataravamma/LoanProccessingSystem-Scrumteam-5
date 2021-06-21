package com.loan.app.controller;

import java.util.logging.Level;
import java.util.logging.Logger;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.loan.app.entities.Admin;
import com.loan.app.entities.LoanVerificationManager;
import com.loan.app.entities.User;
import com.loan.app.service.UserService;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiOperation;

/* User Service Controller
 * User Service Controller contains various methods to interact with the loan user table
 * "/home" is to check the home page 
 * "/adduserasadmin" is to add admin to the user table
 * "/adduserasloanmanager" to add finance officer to the user table
 * "/signin" to sign in into the account
 * "/signout" to sign out of the account
  
 * */


@Validated
@RestController
@RequestMapping("/user")
@ApiModel(value = "User Service Rest Controller" , description = "Holds all APIs related to the User Service")
public class UserServiceController {
	Logger logger = Logger.getLogger(LoanAgreementController.class.getName());	
	
	public UserServiceController() {
		logger.log(Level.INFO,"----->Inside User Service Controller Working!");
	}
	
	@Autowired
	UserService userService;
	
	@ApiOperation(value = "POST mapping to add new user as admin to the LOAN_USER table in the Database", response = User.class)
	@PostMapping("/adduserasadmin")
	public Admin addNewUser(@RequestBody  @Valid Admin admin) {
		this.userService.addNewUser(admin);
		return admin;
		
	}
	@ApiOperation(value = "POST mapping to add new user as loanManager to the LOAN_USER table in the Database", response = User.class)
	@PostMapping("/adduserasloanmanager")
	public LoanVerificationManager addNewUser(@RequestBody  @Valid LoanVerificationManager loanVerificationManager) {
		this.userService.addNewUser(loanVerificationManager);
		return loanVerificationManager;
		
	}
	
	@ApiOperation(value = "POST mapping to add new user to the LOAN_USER table in the Database", response = User.class)
	@PostMapping("/signin")
	public User signIn(@RequestBody  @Valid User user) {
		this.userService.signIn(user);
		return user;
		
	}

	@ApiOperation(value = "POST mapping to logout from the LOAN_USER table in the Database", response = User.class)
	@PostMapping("/signout")
	public User signOut(@RequestBody  @Valid User user) {
		this.userService.signOut(user);
		return user;
		
	}
}
