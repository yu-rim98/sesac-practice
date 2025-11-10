package oop.inheritance.practice01;

// studentId, major 필드 추가
public class Student extends Person {

    String studentId;
    String major;

    public Student(String name, int age, String studentId, String major) {
        super(name, age);
        this.studentId = studentId;
        this.major = major;
    }

    // 안녕하세요, 저는 김철수입니다. 20살이고, 학번은 2024001이며, 컴퓨터공학을 전공합니다.

    @Override
    void introduce() {
        System.out.println(
            "안녕하세요, 저는 " + super.name + "입니다. " + super.age + "살이고, 학번은 " + studentId + "이며, "
                + major + "을 전공합니다.");
    }
}
