package oop.inheritance.practice04;

public class Practice04 {

    public static void main(String[] args) {
//        Animal[] animals = {
//            new Lion("심바", 2),
//            new Elephant("덤보", 3),
//            new Monkey("조조", 2)
//        };
//
        Zoo zoo = new Zoo(10);
        zoo.addAnimal(new Lion("심바", 2));
        zoo.feedingTime();

        zoo.addAnimal(new Elephant("덤보", 3));
        zoo.feedingTime();

        zoo.addAnimal(new Monkey("조조", 2));
        zoo.feedingTime();
    }

}
