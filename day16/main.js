//문제. radix helper

function getDigit(num, x) {
    let str = num.toString();
    let i = x === 1 ? str.length : str.length - 1;
    return Number(str.slice(-x, i)) || 0;
}

//솔루션
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

//문제. radix helper
function digitCount(num) {
    return num.toString().length;
}

//솔루션
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }

    return maxDigits;
}

//문제. radix sort
function radixSort(arr) {
    //배열 안 최대 자릿수를 구한다.
    let max = mostDigits(arr);

    //최대 자릿수만큼 루프를 돌려준다.
    for (let i = 0; i < max; i++) {
        //배열을 담을 변수를 생성한다.
        let nums = Array.from({ length: 10 }, () => []);

        //해당 자릿수의 숫자를 배열의 인덱스로 넣어준다.
        for (let j = 0; j < arr.length; j++) {
            let x = getDigit(arr[j], i);
            nums[x].push(arr[j]);
        }
        //arr 배열을 바꿔준다.
        arr = nums.flat();
    }
    return arr;
}

//솔루션
function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }

    return nums;
}

result(radixSort([10, 55550, 846, 15, 66]));
