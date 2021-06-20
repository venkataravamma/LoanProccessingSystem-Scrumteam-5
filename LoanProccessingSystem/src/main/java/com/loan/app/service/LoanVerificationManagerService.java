package com.loan.app.service;

import com.loan.app.entities.LoanApplication;
import com.loan.app.exception.InvalidLoanApplicationException;

public interface LoanVerificationManagerService {

	public LoanApplication updateStatus(LoanApplication loanApplication) throws InvalidLoanApplicationException ;
}
