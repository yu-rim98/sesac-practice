package oop.inheritance.practice03;

public class Car extends Vehicle{

    boolean hasGPS;

    public Car(String model, int dailyRate, boolean hasGPS) {
        super(model, dailyRate);
        this.hasGPS = hasGPS;
    }


    // GPS 장착 시 하루당 10000원 추가
    @Override
    int calculateRentalCost(int days) {
        if (hasGPS) {
            return (dailyRate + 1000) * days;
        } else {
            return dailyRate * days;
        }
    }

    @Override
    public String toString() {
        return "Car{" +
            "hasGPS=" + hasGPS +
            ", model='" + model + '\'' +
            ", dailyRate=" + dailyRate +
            '}';
    }
}
