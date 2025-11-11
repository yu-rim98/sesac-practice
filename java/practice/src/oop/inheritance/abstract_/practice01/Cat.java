package oop.inheritance.abstract_.practice01;
//
//생성자: super(name, age) 호출
//makeSound() 구현: "야옹~" 출력
//eat() 구현: "생선을 먹습니다" 출력
public class Cat extends Animal {

    public Cat(String name, int age) {
        super(name, age);
    }

    @Override
    public void makeSound() {
        System.out.println("야옹~");
    }

    @Override
    public void eat() {
        System.out.println("생선을 먹습니다.");
    }


}
