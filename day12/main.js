//문재. 버블 정렬
function bubbleSort(arr) {
    //루프 생성 - i의 크기가 작아진다.
    for (let i = arr.length; i > 0; i--) {
        //중첩 루프 생성 - j와 j+1을 비교해 배열을 정렬한다.
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    //정렬된 배열 반환
    return arr;
}

//최적화
function bubbleSort(arr) {
    let noSwaps = true;
    //루프 생성 - i의 크기가 작아진다.
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        //중첩 루프 생성 - j와 j+1을 비교해 배열을 정렬한다.
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    //정렬된 배열 반환
    return arr;
}

result(bubbleSort([85, 1, -3, 8, 45, 10]));
result(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
console.clear();

//문제. 선택 정렬
function selectionSort(arr) {
    //루프 생성 - i의 크기가 커진다
    for (let i = 0; i < arr.length; i++) {
        //최소값을 담을 변수 생성
        let min = i;
        //중첩 루프 생성
        for (let j = i + 1; j < arr.length; j++) {
            //값을 비교하여 최소값이면 인덱스 바꿈
            if (arr[min] > arr[j]) min = j;
        }
        //해당 인덱스로 배열 정렬
        if (i !== min) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    //정렬된 배열 반환
    return arr;
}
result(selectionSort([85, 1, -3, 8, 45, 10]));
