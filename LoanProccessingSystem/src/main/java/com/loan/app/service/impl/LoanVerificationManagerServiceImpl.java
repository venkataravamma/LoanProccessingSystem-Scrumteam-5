package com.loan.app.service.impl;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.loan.app.dao.LoanApplicationRepository;
import com.loan.app.entities.LoanApplication;
import com.loan.app.exception.InvalidLoanApplicationException;
import com.loan.app.service.LoanVerificationManagerService;

/*Loan Verification Manager Service
 *LoanVerificationService checks for the existing of loan application and 
 *other field as per necessity if existing
 *
 * */

@Service
public class LoanVerificationManagerServiceImpl implements LoanVerificationManagerService {

	@Autowired
	LoanApplicationRepository loanApplicationRepository;

	public LoanVerificationManagerServiceImpl(LoanApplicationRepository applicationRepository) {
		super();
		this.loanApplicationRepository = applicationRepository;
	}

	@Override
	@Transactional
	// method to check loan application is present in the DB, update if application
	// is present else invoke Exception class
	public LoanApplication updateStatus(LoanApplication loanApplication) throws InvalidLoanApplicationException {

		Optional<LoanApplication> optional = loanApplicationRepository.findById(loanApplication.getApplicationId());
		if (optional.isPresent()) {
			loanApplicationRepository.save(loanApplication);
			return loanApplication;
		} else {
			throw new InvalidLoanApplicationException("Loan application couldn't be Updated! ");// returns updated loan
																								// application

		}
	}

}
