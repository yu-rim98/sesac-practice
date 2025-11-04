package practice2;

public class practice2 {

    public static void main(String[] args) {
//        문제 2: 별 찍기 패턴 1
//        다음 패턴을 출력하세요.
//
//            예상 출력:
//
//*
//**
//***
//****
//*****

        for (int i = 0; i < 5; i++) {
            for (int j = 0; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
