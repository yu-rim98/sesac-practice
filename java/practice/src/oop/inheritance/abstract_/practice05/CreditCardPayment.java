package oop.inheritance.abstract_.practice05;

//Payment 구현
//private String cardNumber - 카드 번호
//CreditCardPayment(String cardNumber) - 생성자
//processPayment() 구현: "신용카드([cardNumber])로 [amount]원 결제 완료" 출력
//getPaymentMethod() 구현: "신용카드" 반환
public class CreditCardPayment implements Payment{

    private String cardNumber;

    public CreditCardPayment(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    @Override
    public void processPayment(int amount) {
        System.out.println("신용카드(" + cardNumber + ")로 " + amount + "원 결제 완료");
    }

    @Override
    public String getPaymentMethod() {
        return "신용카드";
    }
}
