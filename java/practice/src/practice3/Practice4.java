package practice3;

public class Practice4 {

    public static void main(String[] args) {
//        문제 4: 배열 요소 개수 세기
//        배열에서 각 숫자가 몇 번 나오는지 세세요.
//
//            입력:
//
//        int[] arr = {1, 2, 2, 3, 3, 3, 4, 4, 4, 4};
//        예상 출력:
//
//        1: 1개
//        2: 2개
//        3: 3개
//        4: 4개

        int[] arr = {1, 2, 2, 3, 3, 3, 4, 4, 4, 4};
        int[] count = new int[arr.length];

        for (int num : arr) {
            count[num]++;
        }

        for (int i = 0; i < count.length; i++) {
            if (count[i] > 0) {
                System.out.println(i + " : " + count[i] + "개");
            }
        }

    }
}
