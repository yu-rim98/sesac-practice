package oop.inheritance.practice02;

public class Account {

    String accountNumber;
    int balance;

    public Account(String accountNumber, int balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    void deposit(double amount) {
        this.balance += amount;
    }
    void withdraw(double amount) {
        if (balance >= amount) {
            this.balance -= amount;
        } else {
            System.out.println("잔액이 부족합니다.");
        }
    }
}
