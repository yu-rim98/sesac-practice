package oop.inheritance.practice03;

public class Truck extends Vehicle{
    double capacity;

    public Truck(String model, int dailyRate, double capacity) {
        super(model, dailyRate);
        this.capacity = capacity;
    }

    // 1톤당 하루 5000원 추가
    @Override
    int calculateRentalCost(int days) {
        return (int) ((dailyRate + (capacity * 5000)) * days);
    }

    @Override
    public String toString() {
        return "Truck{" +
            "capacity=" + capacity +
            ", model='" + model + '\'' +
            ", dailyRate=" + dailyRate +
            '}';
    }
}
