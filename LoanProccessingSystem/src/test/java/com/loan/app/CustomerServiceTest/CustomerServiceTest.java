package com.loan.app.CustomerServiceTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import com.loan.app.dao.CustomerRepository;
import com.loan.app.dao.LoanAgreementRepository;
import com.loan.app.dao.LoanApplicationRepository;
import com.loan.app.entities.Customer;
import com.loan.app.exception.CustomerNotFoundException;
import com.loan.app.service.impl.CustomerServiceImpl;


/* Customer Service Junit Testing
 * Testing add new customer by passing all the required parameters
 * Testing view all customers by passing all the required parameters
 * Testing view customer by customer Id by passing all the required parameters
 * Testing delete customer by customer Id by passing all the required parameters
 * Testing update customer details by passing all the required parameters

 * */

@SpringBootTest
 class CustomerServiceTest {

	CustomerRepository customerRepo;
	LoanApplicationRepository applicationRepo;
	LoanAgreementRepository agreementRepo;
	private static CustomerServiceImpl customerService;

	private static AutoCloseable ac;
	
	@BeforeEach
	public void doinit()
	{
	      customerRepo = mock(CustomerRepository.class); // test through approach 2
	      customerService = new  CustomerServiceImpl(customerRepo); 	// Approach 2
		ac = MockitoAnnotations.openMocks(this);
	}
	
	@AfterEach
	public void doAtEnd()throws Exception
	{
		ac.close();
	}
	
	@Test
	// @Disabled
	@DisplayName("Test-Save-Customer")
	void testSaveCustomer() {
		Customer customerInput = new Customer();
		customerInput.setUserId(1);
		customerInput.setCustomerName("arifa");
		customerInput.setMobileNumber("9876543210");
		customerInput.setEmailId("arifa0103@gmail.com");
		customerInput.setPassword("sachin0103");
		customerInput.setDateOfBirth(LocalDate.parse("2021-03-15"));
		customerInput.setGender("feMale");
		customerInput.setNationality("Indian");
		customerInput.setAadharNumber("123456987654");
		customerInput.setPanNumber("654321sidh");

		when(customerRepo.save(customerInput)).thenReturn(customerInput);
		Customer customer_test = customerService.addCustomer(customerInput);
		assertEquals(customerInput, customer_test);

	}

	@Test
	// @Disabled
	@DisplayName("Test-Get All Customer")
	void testGetAllCustomers() {
		@SuppressWarnings("unchecked")
		List<Customer> customerList = mock(List.class);
		when(customerRepo.findAll()).thenReturn(customerList);
		List<Customer> outputCustomerList = customerService.viewAllCustomers();
		assertEquals(customerList, outputCustomerList);
	}

	@Test
	// @Disabled
	@DisplayName("Test-Get Customer by Id")
	void testViewCustomerById() throws CustomerNotFoundException {

		
		int input = 1;
		Customer customer = mock(Customer.class);
		Optional<Customer> optional_customer = Optional.of(customer);
		when(customerRepo.findById(input)).thenReturn(optional_customer);
		Optional<Customer> customer_test = Optional.of(customerService.viewCustomer(input));
		assertEquals(optional_customer, customer_test);
	}

	@Test
	// @Disabled
	@DisplayName("Test-Delete Customer")
	void testDeleteCustomer() throws CustomerNotFoundException {
		Customer customerInput = new Customer();
		customerInput.setUserId(1);
		customerInput.setCustomerName("arifa");
		customerInput.setMobileNumber("9876543210");
		customerInput.setEmailId("arifa0103@gmail.com");
		customerInput.setPassword("sachin0103");
		customerInput.setDateOfBirth(LocalDate.parse("2021-03-15"));
		customerInput.setGender("feMale");
		customerInput.setNationality("Indian");
		customerInput.setAadharNumber("123456987654");
		customerInput.setPanNumber("654321sidh");

		Customer output = new Customer();
		output.setUserId(1);
		output.setCustomerName("arifa");
		output.setMobileNumber("9876543210");
		output.setEmailId("arifa0103@gmail.com");
		output.setPassword("sachin0103");
		output.setDateOfBirth(LocalDate.parse("2021-03-15"));
		output.setGender("feMale");
		output.setNationality("Indian");
		output.setAadharNumber("123456987654");
		output.setPanNumber("654321sidh");

		try {
			doNothing().when(customerRepo).delete(customerInput);

			customerService.deleteCustomer(1);

			verify(customerRepo).delete(customerInput);
			assertEquals(customerInput, output);

		} catch (CustomerNotFoundException e) {

		}

	}

	@Test
	// @Disabled
	@DisplayName("Test-Update customer")
	void testUpdateCustomer() throws CustomerNotFoundException {

		Customer customerInput = new Customer();
		customerInput.setUserId(1);
		customerInput.setCustomerName("arifa");
		customerInput.setMobileNumber("9876543210");
		customerInput.setEmailId("arifa0103@gmail.com");
		customerInput.setPassword("sachin0103");
		customerInput.setDateOfBirth(LocalDate.parse("2021-03-15"));
		customerInput.setGender("feMale");
		customerInput.setNationality("Indian");
		customerInput.setAadharNumber("123456987654");
		customerInput.setPanNumber("123456yuio");

		
		Optional<Customer> optionalCustomer= Optional.of(customerInput);
		Customer updateCustomer = new Customer();
		updateCustomer.setUserId(1);
		updateCustomer.setCustomerName("arifa");
		updateCustomer.setMobileNumber("9876543210");
		updateCustomer.setEmailId("arifa0103@gmail.com");
		updateCustomer.setPassword("sachin0103");
		updateCustomer.setDateOfBirth(LocalDate.parse("2021-03-15"));
		updateCustomer.setGender("feMale");
		updateCustomer.setNationality("Indian");
		updateCustomer.setAadharNumber("123456987654");
		updateCustomer.setPanNumber("123456yuio");

		when(customerRepo.findById(1)).thenReturn(optionalCustomer);
		when(customerRepo.save(updateCustomer)).thenReturn(updateCustomer);
		Customer customer_test=customerService.updateCustomer(updateCustomer);
		assertEquals(updateCustomer,customer_test);
		
	}
}