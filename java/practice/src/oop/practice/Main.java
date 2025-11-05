package oop.practice;

public class Main {

    public static void main(String[] args) {
        Person person = new Person("홍길동", 25);
        person.printInfo();

        Dog dog = new Dog("진돗개", "백구");
        dog.sit();
        dog.hand();
    }
}
