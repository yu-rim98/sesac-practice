package oop.inheritance.practice02;

public class CheckingAccount extends Account {

    int overdraftLimit;

    public CheckingAccount(String accountNumber, int balance, int overdraftLimit) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }

    void withdraw(double amount) {
        if (balance - amount >= -overdraftLimit) {
            balance -= amount;
            System.out.println(amount + "원 출금 완료 (현재 잔액: " + balance + ")");
        } else {
            System.out.println("출금 실패: 마이너스 한도(" + overdraftLimit + "원) 초과");
        }
    }
}
