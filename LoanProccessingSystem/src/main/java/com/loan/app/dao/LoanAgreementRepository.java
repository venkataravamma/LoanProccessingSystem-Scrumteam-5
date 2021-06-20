package com.loan.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.loan.app.entities.LoanAgreement;

public interface LoanAgreementRepository extends JpaRepository<LoanAgreement, Long>{

}
