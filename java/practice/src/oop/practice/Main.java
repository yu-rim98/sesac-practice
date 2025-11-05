package oop.practice;

public class Main {

    public static void main(String[] args) {
        Person person = new Person("홍길동", 25);
        person.printInfo();

        Dog dog = new Dog("진돗개", "백구");
        dog.sit();
        dog.hand();

        Car car = new Car("Avante", 0);
        car.accelerate();  // 속도 10
        car.accelerate();  // 속도 20
        car.accelerate();  // 속도 30
        car.brake();       // 속도 20
        car.printInfo();   // 모델: Avante, 속도: 20km/h

        BankAccount bankAccount = new BankAccount("1111", 0);
        bankAccount.deposit(10000);
        bankAccount.withdraw(3000);
        int balance = bankAccount.getBalance();
        System.out.println(balance);


    }
}
