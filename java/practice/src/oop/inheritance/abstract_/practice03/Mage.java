package oop.inheritance.abstract_.practice03;

public class Mage extends GameCharacter {

    public Mage(String name) {
        super(name, 80);
    }


    @Override
    public void executeAttack() {
        System.out.println("마법 공격! 데미지: " + super.attackPower);
    }
}
