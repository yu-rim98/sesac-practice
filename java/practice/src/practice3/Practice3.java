package practice3;

public class Practice3 {

    public static void main(String[] args) {
//        문제 3: 특정 값 찾기
//        배열에서 특정 값이 있는 인덱스를 찾으세요. 없으면 -1을 반환하세요.
//
//        입력:
//
//        int[] arr = {10, 20, 30, 40, 50};
//        int target = 30;
//        예상 출력:
//
//        30의 인덱스: 2
        int[] arr = {10, 20, 30, 40, 50};
        int target = 30;

        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                System.out.println(target + "의 인덱스 : " + i);
            }
        }


    }
}
