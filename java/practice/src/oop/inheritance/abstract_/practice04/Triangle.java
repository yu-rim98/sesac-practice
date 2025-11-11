package oop.inheritance.abstract_.practice04;

public class Triangle implements Drawable{
    private int base;
    private int height;

    public Triangle(int base, int height) {
        this.base = base;
        this.height = height;
    }

    @Override
    public void draw() {
        System.out.println("밑변 " + base + ", 높이 " + height + "인 삼각형을 그립니다.");
    }
}
