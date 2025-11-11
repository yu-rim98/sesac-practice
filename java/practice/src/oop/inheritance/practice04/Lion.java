package oop.inheritance.practice04;

public class Lion extends Animal {

    public Lion(String name, int age) {
        super(name, age);
    }

    @Override
    void makeSound() {
        System.out.println("사자 " + super.name + ": 어흥!");
    }
}
