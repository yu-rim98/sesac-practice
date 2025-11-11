package oop.inheritance.abstract_.practice02;

public class Main {

    public static void main(String[] args) {
        Shape[] shapes = {
            new Circle(0, 0, "빨강", 5),
            new Rectangle(10, 10, "파랑", 4, 6),
            new Triangle(20, 20, "초록", 3, 4, 5)
        };

        for (Shape shape : shapes) {
            shape.draw();
            System.out.println();
        }
    }
}
