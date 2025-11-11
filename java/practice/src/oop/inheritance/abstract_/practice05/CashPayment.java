package oop.inheritance.abstract_.practice05;
//
//processPayment() 구현: "현금 [amount]원 결제 완료" 출력
//getPaymentMethod() 구현: "현금" 반환
public class CashPayment implements Payment{

    @Override
    public void processPayment(int amount) {
        System.out.println("현금 " + amount + "원 결제 완료");
    }

    @Override
    public String getPaymentMethod() {
        return "현금";
    }
}
