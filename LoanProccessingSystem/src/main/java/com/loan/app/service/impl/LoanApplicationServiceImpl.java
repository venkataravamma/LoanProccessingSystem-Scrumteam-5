package com.loan.app.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.loan.app.dao.LoanApplicationRepository;
import com.loan.app.entities.LoanApplication;
import com.loan.app.exception.InvalidLoanApplicationException;
import com.loan.app.service.LoanApplicationService;


/* Loan Application Service
 * LoanApplicationServiceImpl implements LoanApplicationService interface
 * LoanApplication addLoanApplication(LoanApplication loanApplication) to add new loan application
 * LoanApplication updateLoanApplication(LoanApplication loanApplication) throws InvalidLoanApplicationException to update the loan application
 * LoanApplication deleteLoanApplication(long loanApplicationId) throws InvalidLoanApplicationException to delete the loan application
 * List<LoanApplication> retrieveAllLoanApplication() to get all the loan applications
 * LoanApplication retrieveLoanApplicationById(long loanApplicationId) throws InvalidLoanApplicationException to get all the loan applications by loan Id
 * 
 * */

@Service
public class LoanApplicationServiceImpl implements LoanApplicationService {
	Logger logger = Logger.getLogger(LoanApplicationServiceImpl.class.getName());

	@Autowired
	LoanApplicationRepository repository;

	public LoanApplicationServiceImpl(LoanApplicationRepository repository) {
		super();
		this.repository = repository;
	}

	@Transactional
	@Override
	public LoanApplication addLoanApplication(LoanApplication loanApplication) {

		try {
			repository.save(loanApplication);
		} catch (Exception e) {
			logger.info(e.getMessage());
		}
		return loanApplication;
	}

	@Transactional
	@Override
	public LoanApplication updateLoanApplication(LoanApplication loanApplication)
			throws InvalidLoanApplicationException {

		Optional<LoanApplication> optional = repository.findById(loanApplication.getApplicationId());
		if (optional.isPresent()) {
			repository.save(loanApplication);
			return optional.get();
		} else {

			throw new InvalidLoanApplicationException("Loan application couldn't be Updated! ");
		}

	}

	@Transactional
	@Override
	public LoanApplication deleteLoanApplication(long loanApplicationId) throws InvalidLoanApplicationException {

		Optional<LoanApplication> optional = repository.findById(loanApplicationId);
		if (optional.isPresent()) {
			repository.deleteById(loanApplicationId);
			return optional.get();
		} else {
			throw new InvalidLoanApplicationException("Loan application ID not found for delete operation!");
		}

	}

	@Override
	public List<LoanApplication> retrieveAllLoanApplication() {

		List<LoanApplication> list = null;
		try {
			list = repository.findAll();
		} catch (Exception e) {
			logger.info(e.getMessage());
		}
		return list;
	}

	@Override
	public LoanApplication retrieveLoanApplicationById(long loanApplicationId) throws InvalidLoanApplicationException {

		Optional<LoanApplication> optional = repository.findById(loanApplicationId);
		if (optional.isPresent()) {
			repository.findById(loanApplicationId);
			return optional.get();
		} else {
			throw new InvalidLoanApplicationException("Loan application ID not found in records!");
		}

	}

}
