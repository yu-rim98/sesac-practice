package practice2;

public class Practice3 {

    public static void main(String[] args) {
//        문제 3: 별 찍기 패턴 2
//        다음 패턴을 출력하세요.
//
//            예상 출력:
//
//*****
//****
//***
//**
//*

        for (int i = 1; i <= 5; i++) {
            for (int j = 5; j >= i; j--) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
