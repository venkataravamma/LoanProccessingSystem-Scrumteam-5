package com.loan.app.service;

import java.util.List;

import com.loan.app.entities.LoanAgreement;
import com.loan.app.exception.InvalidLoanAgreementException;



public interface LoanAgreementService {
		
		public LoanAgreement addLoanAgreement(LoanAgreement loanAgreement);
		public LoanAgreement updateLoanAgreement(LoanAgreement loanAgreement) throws InvalidLoanAgreementException;
		public LoanAgreement deleteLoanAgreement(long loanAgreementId) throws InvalidLoanAgreementException;
		public List<LoanAgreement> retrieveAllLoanAgreement();
		public LoanAgreement retrieveLoanAgreementById(long loanAgreementId)throws InvalidLoanAgreementException;
		
		




}



