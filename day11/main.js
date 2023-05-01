//문제1. 선형 검색
function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i;
    }

    return -1;
}

result(linearSearch([10, 15, 20, 25, 30], 15)); // 1
result(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)); // 5
result(linearSearch([100], 100)); // 0
result(linearSearch([1, 2, 3, 4, 5], 6)); // -1
result(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)); // -1
result(linearSearch([100], 200)); // -1
console.clear();

//문제2. 이진 검색
function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let num = arr[mid];
        if (num === val) return mid;
        else if (num < val) start = mid + 1;
        else if (num > val) end = mid - 1;
    }

    return -1;
}

//솔루션
function binarySearch(arr, elem) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] == elem ? middle : -1;
}

result(binarySearch([1, 2, 3, 4, 5], 2)); // 1
result(binarySearch([1, 2, 3, 4, 5], 3)); // 2
result(binarySearch([1, 2, 3, 4, 5], 5)); // 4
result(binarySearch([1, 2, 3, 4, 5], 6)); // -1
result(
    binarySearch(
        [
            5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95,
            96, 98, 99,
        ],
        10
    )
); // 2
result(
    binarySearch(
        [
            5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95,
            96, 98, 99,
        ],
        95
    )
); // 16
result(
    binarySearch(
        [
            5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95,
            96, 98, 99,
        ],
        100
    )
); // -1
console.clear();

//문제3. 나이브 문자열 검색
function naiveSearch(str, elem) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let val = str[i];
        if (val === elem[0]) {
            let same = true;
            for (let x = 1; x < elem.length; x++) {
                if (str[i + x] !== elem[x]) same = false;
            }
            if (same) {
                count++;
            }
        }
    }
    return count;
}

//솔루션
function naiveSearch(long, short) {
    let count = 0;
    for (let i = 0; i < long.length - short.length + 1; i++) {
        for (let j = 0; j < short.length; j++) {
            if (short[j] !== long[i + j]) break;
            if (j === short.length - 1) count++;
        }
    }
    return count;
}

result(naiveSearch("lorie loled lol", "lol"));
