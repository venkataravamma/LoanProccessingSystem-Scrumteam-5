package com.loan.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.loan.app.entities.LoanApplication;



public interface LoanApplicationRepository extends JpaRepository<LoanApplication, Long> {

}
