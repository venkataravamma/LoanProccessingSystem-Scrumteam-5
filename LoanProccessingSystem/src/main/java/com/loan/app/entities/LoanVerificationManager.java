package com.loan.app.entities;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;



import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@Entity
@ApiModel(value = "Loan Verification Manager Bean Class")
@DiscriminatorValue(value = "4")
public class LoanVerificationManager extends User {

	@ApiModelProperty(name = "Loan Verification Manager Name", value = "It holds only alphabets", required = true)
	@NotEmpty(message ="Loan Verification Mnager Name can't be empty!")
	@Size(min = 3, max = 25, message = "Invalid Loan Verification Manager Name please enter a vaild Name!")
	@Pattern(regexp = "^[A-Za-z]+", message = "INVALID PLEASE ENTER AGAIN")
	private String loanManagerName;

	@ApiModelProperty(name = "Loan Verification Manager Mobile Number", value = "It holds Loan verification Manager phone number", required = true)
	@NotEmpty(message = "Phone Number can't be empty!")
	@Size(min = 10, max = 10, message = "Invalid Phone Number please enter a vaild phone number of minimum 10 digits")
	@Pattern(regexp = "^\\d{10}$", message = "Invalid input:Enter numbers only")
	private String loanManagerContact;

	@Override
	public int hashCode() {
	
		return super.hashCode();
	}

	@Override
	public boolean equals(Object objects) {
	
		return super.equals(objects);
	}

	public LoanVerificationManager() {
		super();

	}

	public LoanVerificationManager(int userId, String password, String role) {
		super(userId, password, role);

	}

	public LoanVerificationManager(int userId) {
		super(userId);

	}

	public LoanVerificationManager(String loanManagerName, String loanManagerContact) {
		super();
		this.loanManagerName = loanManagerName;
		this.loanManagerContact = loanManagerContact;
	}

	public String getLoanManagerName() {
		return loanManagerName;
	}

	public void setLoanManagerName(String loanManagerName) {
		this.loanManagerName = loanManagerName;
	}

	public String getLoanManagerContact() {
		return loanManagerContact;
	}

	public void setLoanManagerContact(String loanManagerContact) {
		this.loanManagerContact = loanManagerContact;
	}

	@Override
	public String toString() {
		return "LoanVerificationMnager [loanManagerName=" + loanManagerName + ", loanManagerContact="
				+ loanManagerContact + "]";
	}

}