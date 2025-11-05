package practice3;

import java.util.Arrays;

public class Practice2 {

    public static void main(String[] args) {
//        문제 2: 배열 뒤집기
//        배열을 역순으로 뒤집으세요.
//
//            입력:
//
//        int[] arr = {1, 2, 3, 4, 5};
//        예상 출력:
//
//        원본: [1, 2, 3, 4, 5]
//        뒤집기: [5, 4, 3, 2, 1]
//        힌트: 두 개의 인덱스를 사용하여 양 끝에서 중앙으로 이동하며 교환


        int[] arr = {1, 2, 3, 4, 5};

        System.out.println("원본 : " + Arrays.toString(arr));

        for (int i = 0; i < arr.length / 2; i++) {
            int temp = arr[i];
            arr[i] = arr[arr.length - 1 - i];
            arr[arr.length - 1 - i] = temp;
        }

        System.out.println("뒤집기 : " + Arrays.toString(arr));
    }

}
