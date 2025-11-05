package oop.practice;

//요구사항:
//
//필드: accountNumber (String), balance (int)
//생성자: 계좌번호와 초기 잔액을 받는 생성자
//메서드:
//deposit(int amount): 입금
//withdraw(int amount): 출금
//getBalance(): 잔액 반환
//예상 출력:
//
//입금 10000원, 잔액: 10000원
//출금 3000원, 잔액: 7000원
public class BankAccount {
    private String accountNumber;
    private int balance;

    public BankAccount(String accountNumber, int balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    public void deposit(int amount) {
        this.balance += amount;
        System.out.println("입금 " + amount + "원, 잔액 : " + this.balance + "원");
    }

    public void withdraw(int amount) {
        this.balance -= amount;
        System.out.println("출금 " + amount + "원, 잔액 : " + this.balance + "원");
    }

    public int getBalance() {
        return this.balance;
    }
}
