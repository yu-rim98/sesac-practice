package oop.inheritance.practice02;

public class SavingsAccount extends Account {
    double interestRate;

    public SavingsAccount(String accountNumber, int balance, double interestRate) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }

    void addInterest() {
        double interest = super.balance * interestRate;
        super.balance += (int) interest;
    }
}
