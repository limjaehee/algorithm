//문제3. Multiple Pointers - averagePair

//방법 1
function averagePair(arr, avg) {
    //arr의 배열의 개수가 1개 이하라면 false를 반환한다.
    if (arr.length <= 1) return false;
    //평균값에 *2를 하는 상수를 하나 만든다.
    const num = avg * 2;
    //배열을 객체로 만든다
    let obj = {};
    for (let idx in arr) {
        let value = arr[idx];
        obj[value] = (obj[value] || 0) + 1;
    }
    //배열 반복문을 돌린다
    for (let idx in arr) {
        let value = arr[idx];
        //포인터 값과 더했을 때 합계값이 나오는 값을 찾는다.
        let rest = num - value;
        if (obj[rest]) {
            return true;
        }
    }
    return false;
}

//방법 2
function averagePair(arr, num) {
    let start = 0;
    let end = arr.length - 1;
    //while 조건문은 거짓이 될 때까지 반복한다.
    while (start < end) {
        let avg = (arr[start] + arr[end]) / 2;
        if (avg === num) return true;
        else if (avg < num) start++;
        else end--;
    }
    return false;
}

result(averagePair([1, 2, 3], 2.5)); // true
result(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true 16
result(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
result(averagePair([], 4)); // false
result(averagePair([4, 4, 1], 4)); // true
console.clear();

//문제4. Multiple Pointers - isSubsequence

//방법1
function isSubsequence(str1, str2) {
    if (str1 === str2) return true;
    //str1의 개수보다 str2의 개수가 작을 경우 false를 반환한다.
    if (str1.length > str2) return false;
    //비교할 인덱스 변수를 만든다.
    let idx = 0;
    //str2를 반복문 돌리면서
    for (let value of str2) {
        //일치하면 인덱스 변수를 1증가시킨다.
        if (value === str1[idx]) {
            idx += 1;
        }
    }
    //인덱스 개수가 str1의 개수랑 다르면 false를 반환한다.
    return str1.length === idx;
}

//방법2
function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
        if (str2[j] === str1[i]) i++;
        if (i === str1.length) return true;
        j++;
    }
    return false;
}

//방법3
function isSubsequence(str1, str2) {
    if (str1.length === 0) return true;
    if (str2.length === 0) return false;
    if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
    return isSubsequence(str1, str2.slice(1));
}

result(isSubsequence("hello", "hello world")); // true
result(isSubsequence("sing", "sting")); // true
result(isSubsequence("abc", "abracadabra")); // true
result(isSubsequence("abc", "acb")); // false (order matters)
console.clear();

//문제5. Sliding Window - maxSubarraySum

function maxSubarraySum(arr, num) {
    //배열의 개수가 주어진 num의 개수보다 작을 때 null을 반환
    if (arr.length < num) return null;
    //숫자를 담을 변수를 하나 만든다
    let sum = 0;

    let i = 0;
    //배열 반복문을 돌려 주어진 num의 개수만큼 더해준다
    while (i < arr.length - num + 1) {
        console.log(i);
        i++;
    }
    //값이 변수보다 클 경우 값을 바꿔준다
    //변수를 반환한다.
}

result(maxSubarraySum([100, 200, 300, 400], 2)); // 700
result(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
result(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
result(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
result(maxSubarraySum([2, 3], 3)); // null

let cccc = [100, 200, 300];

console.log(cccc[(0, 1)]);
