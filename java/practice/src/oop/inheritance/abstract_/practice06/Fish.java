package oop.inheritance.abstract_.practice06;

public class Fish implements Swimmable {

    private String name;

    public Fish(String name) {
        this.name = name;
    }

    @Override
    public void swim() {
        System.out.println(name + "이(가) 헤엄칩니다.");
    }
}
