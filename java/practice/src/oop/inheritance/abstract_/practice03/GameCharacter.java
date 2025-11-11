package oop.inheritance.abstract_.practice03;

public abstract class GameCharacter {

    protected String name;
    protected int attackPower;

    public GameCharacter(String name, int attackPower) {
        this.name = name;
        this.attackPower = attackPower;
    }

    public final void attack() {
        prepare();
        executeAttack();
        finish();
    }

    public void prepare() {
        System.out.println(name + "이(가) 공격 준비!");
    }

    public abstract void executeAttack();

    public void finish() {
        System.out.println("공격 완료!");
    }
}
