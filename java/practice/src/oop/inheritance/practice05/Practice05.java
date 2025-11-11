package oop.inheritance.practice05;

public class Practice05 {

    public static void main(String[] args) {
        Movie[] movies = {
            new ActionMovie("어벤져스", 4.5, "최고급 CG"),
            new Comedy("극한직업", 4.7, "상황 코미디"),
            new Drama("기생충", 4.9, "계급 갈등")
        };

        for (Movie movie : movies) {
            movie.displayInfo();
        }
    }
}
