package oop.inheritance.abstract_.practice05;

public class Main {
    public static void main(String[] args) {
        Payment[] payments = {
            new CreditCardPayment("1234-5678"),
            new CashPayment()
        };

        int amount = 50000;
        for (Payment payment : payments) {
            payment.processPayment(amount);
            payment.printReceipt(amount);
            System.out.println();
        }
    }

}
