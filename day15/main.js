//문제. pivot helper

function pivot(arr, start = 0, end = arr.length - 1) {
    //변수 생성 피벗 인덱스
    let temp = 0;
    //배열 반복문 생성
    for (let i = 0; i < arr.length; i++) {
        //인덱스 0보다 숫자가 작을 경우
        if (arr[0] > arr[i]) {
            //피벗 인덱스랑 현재 인덱스랑 차이가 나면 자리 스왑
            if (i - temp > 1) {
                [arr[temp + 1], arr[i]] = [arr[i], arr[temp + 1]];
            }
            //피벗 인덱스 ++ - 항상
            temp++;
        }
    }

    if (temp !== 0) {
        [arr[temp], arr[0]] = [arr[0], arr[temp]];
    }
    console.log(arr);
    //피벗 인덱스 반환
    return temp;
}

//솔루션
function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (array, i, j) => {
        [array[i], array[j]] = [array[j], array[i]];
    };
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    swap(arr, start, swapIdx);
    return swapIdx;
}

//퀵 정렬
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        //left
        quickSort(arr, left, pivotIndex - 1);
        //right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

result(quickSort([4, 6, 9, 1, 2, 5, 3]));
