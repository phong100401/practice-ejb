package com.example.practiceejb.controller;

import com.example.practiceejb.entity.Loan;
import com.example.practiceejb.entity.LoanBeforeEndOfTenure;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/loans")
@CrossOrigin("*")
public class LoanController {
    @RequestMapping(path = "calculateInterest", method = RequestMethod.POST)
    public ResponseEntity<Object> calculateRateOfInterest(@RequestBody Loan loan) {
        double loanAmount =  loan.getLoanAmount();
        double rateOfInterest =  loan.getRate() / 100 / 12;
        double tenure =  loan.getTenure();

        double mathPow = Math.pow((1 + rateOfInterest), tenure);

        double totalLoanAmount = loanAmount * rateOfInterest
                * (mathPow / (mathPow - 1));

        return new ResponseEntity<>(totalLoanAmount, HttpStatus.CREATED);
    }

    @RequestMapping(path = "calculateTotalLoanToBePaid", method = RequestMethod.GET)
    public ResponseEntity<Object> calculateTotalLoanToBePaidBeforeEndOfTenure(double remainingLoan, int rateOfEarlySettleMent) {
        double totalLoanAmount = remainingLoan * rateOfEarlySettleMent;

        return new ResponseEntity<>(totalLoanAmount, HttpStatus.OK);
    }

    @RequestMapping(path = "calculateTotalLoanToBePaid", method = RequestMethod.POST)
    public ResponseEntity<Object> calculateTotalLoanToBePaidBeforeEndOfTenure(@RequestBody LoanBeforeEndOfTenure loanBeforeEndOfTenure) {
        double loanLeftToPay = loanBeforeEndOfTenure.getLoan();
        double rateOfEarlySettleMent = loanBeforeEndOfTenure.getRate() / 100;
        double totalLoanToPay = loanLeftToPay * (1 + rateOfEarlySettleMent);

        return new ResponseEntity<>(totalLoanToPay, HttpStatus.OK);
    }
}
