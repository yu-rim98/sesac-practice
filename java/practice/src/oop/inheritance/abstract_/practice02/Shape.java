package oop.inheritance.abstract_.practice02;

public abstract class Shape {
    protected int x;
    protected int y;
    protected String color;

    public Shape(int x, int y, String color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }
    public final void draw() {
        moveTo();
        setColor();
        drawShape();
    }

    public void moveTo() {
        System.out.println("위치 이동: (" + x + ", " + y +")");
    }

    public void setColor() {
        System.out.println("색상 설정: " + color);
    }

    public abstract void drawShape();
}
