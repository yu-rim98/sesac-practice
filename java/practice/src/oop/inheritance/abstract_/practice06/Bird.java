package oop.inheritance.abstract_.practice06;

public class Bird implements Flyable {

    private String name;

    public Bird(String name) {
        this.name = name;
    }


    @Override
    public void fly() {
        System.out.println(name + "이(가) 하늘을 날아갑니다.");
    }
}
