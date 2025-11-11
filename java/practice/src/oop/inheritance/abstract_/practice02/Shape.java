package oop.inheritance.abstract_.practice02;


//public final void draw() - 템플릿 메서드 (final로 선언)
//실행 순서: moveTo() → setColor() → drawShape()
//void moveTo() - 일반 메서드
//"위치 이동: (x, y)" 출력
//void setColor() - 일반 메서드
//"색상 설정: [color]" 출력
//abstract void drawShape() - 추상 메서드
//각 도형마다 다르게 구현
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
