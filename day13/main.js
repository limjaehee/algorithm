//문제. 삽입 정렬
function insertionSort(arr) {
    //루프 생성 - arr 길이만큼
    for (let i = 1; i < arr.length; i++) {
        //중첩 루프 생성 - i의 길이에서 0이 될 때까지
        for (let j = i; j > 0; j--) {
            //i의 값이 j보다 작으면 j-1위치에 삽입
            if (arr[j - 1] > arr[j]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            } else break;
        }
    }
    return arr;
}

//솔루션
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

result(insertionSort([5, 6, 2]));
