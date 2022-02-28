package com.example.practiceejb.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Loan {
    private double loanAmount;
    private double rate;
    private double tenure;
}
