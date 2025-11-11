package oop.inheritance.practice04;

public class Monkey extends Animal{

    public Monkey(String name, int age) {
        super(name, age);
    }

    @Override
    void makeSound() {
        System.out.println("원숭이 " + super.name + ": 끼끼!");
    }
}
