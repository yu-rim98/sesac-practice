package generic.practice01;

//getFirst(): 첫 번째 값 반환
//getSecond(): 두 번째 값 반환
//printBoth(): 두 값을 "첫 번째: X, 두 번째: Y" 형식으로 출력
//areEqual(): 두 값이 같은지 비교 (equals 사용)
public class Calculator<T> {
    private T first;
    private T second;

    public Calculator(T first, T second) {
        this.first = first;
        this.second = second;
    }

    public T getFirst() {
        return first;
    }

    public T getSecond() {
        return second;
    }

    public void printBoth() {
        System.out.println("첫 번째: " + first + ", 두 번째 : " + second);
    }

    public boolean areEqual() {
        return first.equals(second);
    }
}
