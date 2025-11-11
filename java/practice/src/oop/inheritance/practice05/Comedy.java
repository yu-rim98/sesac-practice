package oop.inheritance.practice05;

public class Comedy extends Movie{

    String humorStyle;

    public Comedy(String title, double rating, String humorStyle) {
        super(title, rating);
        this.humorStyle = humorStyle;
    }

    //
//    [액션] 어벤져스 (평점: 4.5) - 특수효과: 최고급 CG
//[코미디] 극한직업 (평점: 4.7) - 유머: 상황 코미디
//[드라마] 기생충 (평점: 4.9) - 주제: 계급 갈등

    @Override
    void displayInfo() {
        System.out.println("[코미디] " + super.title + "(평점: " + super.rating + ") - 유머: " + this.humorStyle);
    }
}
