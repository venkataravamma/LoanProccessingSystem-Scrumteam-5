package com.loan.app.service;

import java.time.LocalDate;
import java.util.List;

import com.loan.app.entities.Customer;
import com.loan.app.exception.CustomerNotFoundException;


public interface CustomerService {
		
		public Customer addCustomer(Customer customer) ;
		public Customer updateCustomer(Customer customer) throws CustomerNotFoundException;
		public Customer deleteCustomer(int custid) throws CustomerNotFoundException;
		public Customer viewCustomer(int custid) throws CustomerNotFoundException;
		public List<Customer> viewAllCustomers();
		public List<Customer> viewCustomerList(LocalDate dateOfApplication);


	


}
