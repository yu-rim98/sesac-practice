package oop.practice;

//속성:
//
//모델명(model)
//속도(speed)

//기능:
//
//accelerate(): 속도 10 증가
//brake(): 속도 10 감소
//printInfo(): 모델명과 현재 속도 출력
public class Car {

    private String model;
    private int speed;

    public Car(String model, int speed) {
        this.model = model;
        this.speed = speed;
    }

    public void accelerate() {
        this.speed += 10;
    }

    public void brake() {
        this.speed -= 10;
    }

    public void printInfo() {
        System.out.println("모델 : " + this.model + ", 속도 : " + this.speed + "km/h");
    }
}
