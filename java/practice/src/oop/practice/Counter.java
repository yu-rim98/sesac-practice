package oop.practice;


//요구사항:
//
//필드: count (int)
//생성자: 기본값 0으로 초기화
//메서드:
//increment(): count 1 증가
//decrement(): count 1 감소
//getCount(): count 반환
//reset(): count를 0으로 리셋
public class Counter {

    private int count;

    public void increment() {
        this.count++;
    }

    public void decrement() {
        this.count--;
    }

    public int getCount() {
        return this.count;
    }
    
    public void reset() {
        this.count = 0;
    }
}
