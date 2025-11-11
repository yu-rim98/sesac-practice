package oop.inheritance.abstract_.practice04;

public class Rectangle implements Drawable {
    private int width;
    private int height;

    public Rectangle(int width, int height) {
        this.width = width;
        this.height = height;
    }

    @Override
    public void draw() {
        System.out.println(width + " X " + height +"사각형을 그립니다.");
    }
}
