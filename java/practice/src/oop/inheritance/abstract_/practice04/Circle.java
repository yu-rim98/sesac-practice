package oop.inheritance.abstract_.practice04;

public class Circle implements Drawable {

    private int radius;

    public Circle(int radius) {
        this.radius = radius;
    }

    @Override
    public void draw() {
        System.out.println("반지름 " + radius + "인 원을 그립니다.");
    }
}
