package oop.inheritance.abstract_.practice02;

public class Circle extends Shape{

    private int radius;

    public Circle(int x, int y, String color, int radius) {
        super(x, y, color);
        this.radius = radius;
    }

    @Override
    public void drawShape() {
        System.out.println("반지름 " + radius + "인 원 그리기");
    }
}
