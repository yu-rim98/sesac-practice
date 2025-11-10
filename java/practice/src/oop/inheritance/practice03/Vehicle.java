package oop.inheritance.practice03;

public class Vehicle {
    String model;
    int dailyRate;

    public Vehicle(String model, int dailyRate) {
        this.model = model;
        this.dailyRate = dailyRate;
    }

    int calculateRentalCost(int days) {
        return dailyRate * days;
    }

    @Override
    public String toString() {
        return "Vehicle{" +
            "model='" + model + '\'' +
            ", dailyRate=" + dailyRate +
            '}';
    }
}
