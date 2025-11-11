package oop.inheritance.practice04;


public class Elephant extends Animal{

    public Elephant(String name, int age) {
        super(name, age);
    }

    @Override
    void makeSound() {
        System.out.println("코끼리 " + super.name + ": 뿌우우!");
    }
}
