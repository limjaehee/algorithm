//문제1. reverse

function reverse(str) {
    //str의 개수가 0이면 return을 반환한다.
    if (!str.length) return "";
    //리턴 = str의 마지막 + 재귀함수로 str의 마지막을 뺀 글자
    return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
}

result(reverse("awesome")); // 'emosewa'
result(reverse("rithmschool")); // 'loohcsmhtir'
console.clear();

//문제2. isPalindrome

function isPalindrome(str) {
    //str의 개수가 1개 이하면 true를 반환
    if (str.length <= 1) return true;
    //str의 첫번째 글자와 str의 마지막 글자가 같은지 비교 틀리면 false를 반환
    if (str[0] !== str[str.length - 1]) return false;
    //리턴 = 재귀함수의 인자로 str의 첫번째 글자와 마지막을 뺀 글자를 넣기
    return isPalindrome(str.slice(1, str.length - 1));
}

result(isPalindrome("awesome")); // false
result(isPalindrome("foobar")); // false
result(isPalindrome("tacocat")); // true
result(isPalindrome("amanaplanacanalpanama")); // true
result(isPalindrome("amanaplanacanalpandemonium")); // false
console.clear();

//문제3. someRecursive

const isOdd = (val) => val % 2 !== 0;

function someRecursive(arr, cnd) {
    //배열의 개수가 0일 경우 false를 반환
    if (!arr.length) return false;
    //배열의 첫번째가 조건을 충족하면 true를 반환
    if (cnd(arr[0])) return true;
    //리턴 = 배열의 첫번째를 제거한 재귀함수
    return someRecursive(arr.slice(1, arr.length), cnd);
}

result(someRecursive([1, 2, 3, 4], isOdd)); // true
result(someRecursive([4, 6, 8, 9], isOdd)); // true
result(someRecursive([4, 6, 8], isOdd)); // false
result(someRecursive([4, 6, 8], (val) => val > 10)); // false
console.clear();

//문제4. flatten

function flatten(x) {
    //변수 생성
    //재귀함수 생성
    //첫번째 배열이 숫자면 push
    //아니면 배열 풀어서 재귀함수 불러오기
}

// result(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
// result(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// result(flatten([[1], [2], [3]])); // [1,2,3]
// result(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
result(flatten([[3, 4], [5]])); // [3, 4, 5]

console.log([3, 4, 5].concat([[3, 4], [5]]));
