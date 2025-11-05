package practice3;

public class Practice5 {

    public static void main(String[] args) {
//        문제 5: 2차원 배열 합계
//        2차원 배열의 모든 요소의 합을 구하세요.
//
//        입력:
//
//        int[][] matrix = {
//            {1, 2, 3},
//            {4, 5, 6},
//            {7, 8, 9}
//        };
//        예상 출력:
//
//        합계: 45

        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        int count = 0;

        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                count += matrix[i][j];
            }
        }

        System.out.println("합계: " + count);

    }
}
