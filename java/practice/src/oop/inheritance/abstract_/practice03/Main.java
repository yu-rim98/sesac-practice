package oop.inheritance.abstract_.practice03;

public class Main {

    public static void main(String[] args) {
        GameCharacter warrior = new Warrior("전사");
        warrior.attack();

        System.out.println();

        GameCharacter mage = new Mage("마법사");
        mage.attack();
    }
}
