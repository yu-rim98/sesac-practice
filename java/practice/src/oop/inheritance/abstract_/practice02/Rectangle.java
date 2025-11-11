package oop.inheritance.abstract_.practice02;

public class Rectangle extends Shape {

    private int width;
    private int height;

    public Rectangle(int x, int y, String color, int width, int height) {
        super(x, y, color);
        this.width = width;
        this.height = height;
    }

    @Override
    public void drawShape() {
        System.out.println(width + " x " + height + "사각형 그리기");
    }
}
