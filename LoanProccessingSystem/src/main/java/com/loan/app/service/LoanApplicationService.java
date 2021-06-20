package com.loan.app.service;

import java.util.List;

import com.loan.app.entities.LoanApplication;
import com.loan.app.exception.InvalidLoanApplicationException;

public interface LoanApplicationService {

	public LoanApplication addLoanApplication(LoanApplication loanApplication);
	public LoanApplication updateLoanApplication(LoanApplication loanApplication) throws InvalidLoanApplicationException;
	public LoanApplication deleteLoanApplication(long loanApplicationId) throws InvalidLoanApplicationException;
	public List<LoanApplication> retrieveAllLoanApplication();
	public LoanApplication retrieveLoanApplicationById(long loanApplicationId) throws InvalidLoanApplicationException;
	

}
