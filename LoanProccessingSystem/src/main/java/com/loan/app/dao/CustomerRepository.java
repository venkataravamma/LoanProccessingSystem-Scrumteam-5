package com.loan.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.loan.app.entities.Customer;



public interface CustomerRepository extends JpaRepository<Customer, Integer>{

}
