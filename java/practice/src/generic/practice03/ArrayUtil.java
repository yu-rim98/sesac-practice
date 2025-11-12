package generic.practice03;

public class ArrayUtil {

    public static <T> void printArray(T[] array) {
        for (T item : array) {
            System.out.print(item + " ");
        }
        System.out.println();
    }

    public static <T> T getFirst(T[] array) {
        if (array == null) {
            return null;
        }

        return array[0];
    }

    public static <T> T getLast(T[] array) {
        if (array == null) {
            return null;
        }

        return array[array.length -1];
    }

}
