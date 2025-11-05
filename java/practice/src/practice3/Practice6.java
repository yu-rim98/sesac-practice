package practice3;

public class Practice6 {

    public static void main(String[] args) {
//        문제 6: 배열에서 두 번째로 큰 수
//        배열에서 두 번째로 큰 수를 찾으세요.
//
//        입력:
//
//        int[] arr = {45, 23, 78, 12, 89, 34};
//        예상 출력:
//
//        두 번째로 큰 수: 78

        int[] arr = {45, 23, 78, 12, 89, 34};

        int first = Integer.MIN_VALUE;   // 가장 큰 수
        int second = Integer.MIN_VALUE;  // 두 번째로 큰 수

        for (int num : arr) {
            if (num > first) {
                second = first;
                first = num;
            } else if (num > second && num < first) {
                second = num;
            }
        }

        System.out.println("두 번째로 큰 수 : " + second);
    }

}
