package oop.inheritance.practice05;

public class Drama extends Movie{

    String theme;

    public Drama(String title, double rating, String theme) {
        super(title, rating);
        this.theme = theme;
    }

    //
//    [액션] 어벤져스 (평점: 4.5) - 특수효과: 최고급 CG
//[코미디] 극한직업 (평점: 4.7) - 유머: 상황 코미디
//[드라마] 기생충 (평점: 4.9) - 주제: 계급 갈등

    @Override
    void displayInfo() {
        System.out.println("[드라마] " + super.title + "(평점: " + super.rating + ") - 주제: " + this.theme);
    }
}
