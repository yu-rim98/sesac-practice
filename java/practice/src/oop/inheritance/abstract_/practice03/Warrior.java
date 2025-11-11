package oop.inheritance.abstract_.practice03;

public class Warrior extends GameCharacter{

    public Warrior(String name) {
        super(name, 50);
    }

    @Override
    public void executeAttack() {
        System.out.println("검으로 베기! 데미지: " + super.attackPower);
    }


}
