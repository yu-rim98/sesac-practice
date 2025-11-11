package oop.inheritance.abstract_.practice06;

public class Main {
    public static void main(String[] args) {
        Duck duck = new Duck("오리");
        duck.swim();
        duck.fly();
        System.out.println();

        Fish fish = new Fish("물고기");
        fish.swim();
        System.out.println();

        Bird bird = new Bird("참새");
        bird.fly();
    }

}
