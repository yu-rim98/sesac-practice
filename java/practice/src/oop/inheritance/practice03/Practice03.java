package oop.inheritance.practice03;

public class Practice03 {

    public static void main(String[] args) {
        Car car = new Car("소나타", 50000, true);
        Truck truck = new Truck("포터", 70000, 1.5);

        System.out.println(car);
        System.out.println("3일 대여료: " + car.calculateRentalCost(3) + "원");

        System.out.println(truck);
        System.out.println("5일 대여료: " + truck.calculateRentalCost(5) + "원");
    }

}
