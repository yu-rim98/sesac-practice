package oop.inheritance.abstract_.practice01;

public abstract class Animal {
    protected String name;
    protected int age;

    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void displayInfo() {
        System.out.println("이름: " + name + ", 나이: " + age + "살");
    }
    
    public abstract void makeSound();

    public abstract void eat();
}
