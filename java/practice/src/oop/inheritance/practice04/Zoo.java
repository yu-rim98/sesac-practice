package oop.inheritance.practice04;

public class Zoo {
    Animal[] animals;
    int count;

//    public Zoo(Animal[] animals) {
//        this.animals = animals;
//    }

    public Zoo(int capacity) {
        this.animals = new Animal[capacity];
        this.count = 0;
    }

    void addAnimal(Animal animal) {
        if (count < animals.length) {
            animals[count++] = animal;
        }
    }

    void feedingTime() {
        System.out.println("=== 먹이 시간 ===");
        for (int i = 0; i < count; i++) {
            animals[i].makeSound();
        }

    }
}
