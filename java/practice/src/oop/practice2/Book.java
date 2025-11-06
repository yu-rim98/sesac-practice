package oop.practice2;
public class Book {
    // TODO: 필드 선언
    private String title;
    private String author;
    private int price;
    private String isbn;

    // TODO: 생성자 오버로딩 (this()를 사용하여 연결)
    // 1. Book(String title, String author)
    //    - 가격은 0, ISBN은 null로 초기화
    public Book(String title, String author) {
        this(title, author, 0, null);
    }

    // 2. Book(String title, String author, int price)
    //    - ISBN은 null로 초기화
    public Book(String title, String author, int price) {
        this(title, author, price, null);
    }

    // 3. Book(String title, String author, int price, String isbn)
    //    - 모든 필드 초기화
    public Book(String title, String author, int price, String isbn) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.isbn = isbn;
    }

    // TODO: displayInfo() 메서드
    // 출력 형식: "제목 - 저자: 저자명, 가격: 0000원"
    public String displayInfo() {
        return displayInfo(false);
    }

    // TODO: displayInfo(boolean detailed) 메서드 오버로딩
    // detailed가 true이고 isbn이 null이 아니면 ISBN도 출력
    // 위의 displayInfo()에서 이 메서드를 호출하도록 구현
    public String displayInfo(boolean detailed) {
        StringBuilder sb = new StringBuilder();

        sb.append(title).append(" - 저자: ").append(author);

        if (detailed && isbn != null) {
            sb.append(", ISBN: ").append(isbn);
        }
        sb.append(", 가격: " + price + "원");

        return sb.toString();
    }

    // TODO: applyDiscount(int percent) 메서드
    // percent% 할인 적용 (예: 10 입력 시 10% 할인)
    public void applyDiscount(int percent) {
        price = price * (100 - percent) / 100;
    }

    // TODO: applyDiscount(int amount, boolean isPercent) 메서드 오버로딩
    // isPercent가 true면 퍼센트 할인, false면 정액 할인
    public void applyDiscount(int amount, boolean isPercent) {
        if (isPercent) {
            applyDiscount(amount);
        } else {
            price = price - amount;
        }
    }

    // TODO: getTitle() 메서드
    // 제목 반환
    public String getTitle() {
        return title;
    }

    // TODO: getAuthor() 메서드
    // 저자 반환
    public String getAuthor() {
        return author;
    }

    // TODO: getPrice() 메서드
    // 가격 반환
    public int getPrice() {
        return price;
    }
}
