package com.loan.app.LoanApplicationServiceTest;

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

import com.loan.app.dao.LoanApplicationRepository;
import com.loan.app.entities.LoanApplication;
import com.loan.app.entities.Status;
import com.loan.app.exception.InvalidLoanApplicationException;
import com.loan.app.service.impl.LoanApplicationServiceImpl;

/* Loan Application Service Junit Testing
 * Testing add new loan application by passing all the required parameters
 * Testing get loan application by Id and by passing all the required parameters
 * Testing update loan application by Id and passing all the required parameters
 * Testing delete loan application by Id and passing all the required parameters
 
 * */

@SpringBootTest
public class LoanApplicationServiceTest {
	
	LoanApplicationRepository applicationrepo;
	private static LoanApplicationServiceImpl applicationService;
	private static AutoCloseable ac;
	
	@BeforeEach
	public void doinit()
	{
		applicationrepo = mock(LoanApplicationRepository.class); 
		applicationService = new  LoanApplicationServiceImpl(applicationrepo); 
		ac = MockitoAnnotations.openMocks(this);
	}
	
	@AfterEach
	public void doAtEnd()throws Exception
	{
		ac.close();
	}
	
	@Test
	//@Disabled
	@DisplayName("Test - Add Loan Application")
	void testaddLoanApplication() {
	
		LoanApplication input = new LoanApplication();
		input.setApplicationId(101);
		input.setApplicationDate(LocalDate.parse("2020-01-08"));
		input.setCustomer(null);
		input.setLoanAppliedAmount(190000);
		input.setLoanApprovedAmount(90000);
		input.setLoanVerificationManagerApproval(true);
		input.setAdminApproval(true);
		input.setStatus(Status.APPROVED);
		
		when(applicationrepo.save(input)).thenReturn(input);
		LoanApplication application_test = applicationService.addLoanApplication(input);
		assertEquals(input, application_test );

		
	}
	
	@Test
	// @Disabled
	@DisplayName("Test - Get All Loan Applications")
	void testretrieveAllLoanApplication() {
		
		List<LoanApplication> applicationList = mock(List.class);
		when(applicationrepo.findAll()).thenReturn(applicationList);
		List<LoanApplication> outputApplicationList = applicationService.retrieveAllLoanApplication();
		assertEquals(applicationList, outputApplicationList);
	}

	
	@Test
	// @Disabled
	@DisplayName("Test - Get Loan Application by ID")
	void testViewCustomerById() throws InvalidLoanApplicationException {

		
		Long input = (long) 101;
		LoanApplication loanApplication = mock(LoanApplication.class);
		Optional<LoanApplication> optional_loanApplication = Optional.of(loanApplication);
		when(applicationrepo.findById(input)).thenReturn(optional_loanApplication);
		Optional<LoanApplication> application_test = Optional.of(applicationService.retrieveLoanApplicationById(input));
		assertEquals(optional_loanApplication, application_test);
	}
	
	@Test
	//@Disabled
	@DisplayName("Test - Delete Loan Application")
	void deleteLoanApplication() throws InvalidLoanApplicationException {
		
		LoanApplication input = new LoanApplication();
		input.setApplicationId(101);
		input.setApplicationDate(LocalDate.parse("2020-01-08"));
		input.setCustomer(null);
		input.setLoanAppliedAmount(100000);
		input.setLoanApprovedAmount(10000);
		input.setLoanVerificationManagerApproval(false);
		input.setAdminApproval(true);
		input.setStatus(null);
        
		LoanApplication output = new LoanApplication();
		output.setApplicationId(101);
		output.setApplicationDate(LocalDate.parse("2020-01-08"));
		output.setCustomer(null);
		output.setLoanAppliedAmount(100000);
		output.setLoanApprovedAmount(10000);
		output.setLoanVerificationManagerApproval(false);
		output.setAdminApproval(true);
		output.setStatus(null);
		
		
		try{
			doNothing().
			 when(applicationrepo).delete(input);

			applicationService.deleteLoanApplication(1);

			verify(applicationrepo).delete(input);
			assertEquals(input,output);

		}
		catch(InvalidLoanApplicationException e) {
			
		}
		  
	}
	
	@Test
	//@Disabled
	@DisplayName("Test- Update Loan Application")
	void updateLoanApplication() throws InvalidLoanApplicationException {
		
		LoanApplication input = new LoanApplication();
		input.setApplicationId(101);
		input.setApplicationDate(LocalDate.parse("2020-01-08"));
		input.setCustomer(null);
		input.setLoanAppliedAmount(100000);
		input.setLoanApprovedAmount(10000);
		input.setLoanVerificationManagerApproval(false);
		input.setAdminApproval(true);
		input.setStatus(null);
        
		Optional<LoanApplication> optionalApplication = Optional.of(input);
		LoanApplication output = new LoanApplication();
		output.setApplicationId(101);
		output.setApplicationDate(LocalDate.parse("2020-01-08"));
		output.setCustomer(null);
		output.setLoanAppliedAmount(100000);
		output.setLoanApprovedAmount(10000);
		output.setLoanVerificationManagerApproval(false);
		output.setAdminApproval(true);
		output.setStatus(null);
		
		when(applicationrepo.findById((long) 101)).thenReturn(optionalApplication);
		when(applicationrepo.save(output)).thenReturn(output);
		LoanApplication application_test=applicationService.updateLoanApplication(output);
		assertEquals(output,application_test);
		
	}
	
}	