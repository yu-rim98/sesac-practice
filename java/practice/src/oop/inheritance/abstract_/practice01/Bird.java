package oop.inheritance.abstract_.practice01;
//생성자: super(name, age) 호출
//makeSound() 구현: "짹짹!" 출력
//eat() 구현: "모이를 먹습니다" 출력
public class Bird extends Animal {

    public Bird(String name, int age) {
        super(name, age);
    }

    @Override
    public void makeSound() {
        System.out.println("짹짹!");
    }

    @Override
    public void eat() {
        System.out.println("모이를 먹습니다.");
    }


}

