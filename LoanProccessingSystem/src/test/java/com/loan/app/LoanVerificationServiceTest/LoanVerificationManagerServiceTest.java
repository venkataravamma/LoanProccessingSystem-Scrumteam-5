package com.loan.app.LoanVerificationServiceTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

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
import com.loan.app.service.impl.LoanVerificationManagerServiceImpl;

/* Loan Verification Manager Service Testing
 * Testing the status update of Loan verification by passing status of loan application
 * 
 * */


@SpringBootTest
public class LoanVerificationManagerServiceTest {

	LoanApplicationRepository loanApplicationRepo;

	private static LoanVerificationManagerServiceImpl loanVerificationservice;

	private static AutoCloseable ac;

	@BeforeEach
	public void doinit() {
		loanApplicationRepo = mock(LoanApplicationRepository.class); // test through approach 2
		loanVerificationservice = new LoanVerificationManagerServiceImpl(loanApplicationRepo); // Approach 2
		ac = MockitoAnnotations.openMocks(this);
	}

	@AfterEach
	public void doAtEnd() throws Exception {
		ac.close();
	}

	@Test
	@DisplayName("Test to update Status")
	void testUpdateStatus() throws InvalidLoanApplicationException {
		LoanApplication loanApplication = new LoanApplication(1,Status.APPROVED);

		
		Optional<LoanApplication> optionalApplication=Optional.of(loanApplication);
		LoanApplication updateLoanApplication = new LoanApplication(1,Status.PENDING);
		when(loanApplicationRepo.findById((long) 1)).thenReturn(optionalApplication);
		when(loanApplicationRepo.save(updateLoanApplication)).thenReturn(updateLoanApplication);
		LoanApplication test_loanapplication=loanVerificationservice.updateStatus(updateLoanApplication);
		assertEquals(updateLoanApplication,test_loanapplication);
	}

}