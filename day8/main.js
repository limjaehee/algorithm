// 문제1. power

function power(base, exponent) {
    //두번째 인자가 0이면 1을 반환한다.
    if (exponent === 0) return 1;
    //리턴으로 첫번째 인자 * power 함수를 다시 호출해 인자는 하나를 빼준다.
    return base * power(base, exponent - 1);
}

result(power(2, 0)); // 1
result(power(2, 2)); // 4
result(power(2, 4)); // 16
console.clear();

//문제2. factorial

function factorial(x) {
    //x가 1보다 같거나 작으면 1을 반환한다.
    if (x < 0) return 0;
    if (x <= 1) return 1;
    //리턴으로 첫째번재 인자 * 재귀 호출하여 인자 -1을 해준다.
    return x * factorial(x - 1);
}

result(factorial(1)); // 1
result(factorial(2)); // 2
result(factorial(4)); // 24
result(factorial(7)); // 5040
console.clear();

//문제3. productOfArray

function productOfArray(arr) {
    //배열이 1보다 작으면 첫번째 값을 반환한다.
    if (arr.length === 0) return 1;
    //리턴 첫번째 배열 * 재귀 호출하여 인자로 배열의 첫번째 값을 하나 빼준다.
    return arr[0] * productOfArray(arr.slice(1));
}

result(productOfArray([1, 2, 3])); // 6
result(productOfArray([1, 2, 3, 10])); // 60
console.clear();

//문제4. recursiveRange

function recursiveRange(x) {
    //x가 0이면 0을 반환한다.
    if (x === 0) return 0;
    //리턴 x + 재귀 호출하여 인자로 x에서 1을 빼준다.
    return x + recursiveRange(x - 1);
}

result(recursiveRange(6)); // 21
result(recursiveRange(10)); // 55
console.clear();

//문제5. fib (피보나치 수열)

function fib(num) {
    //sum 변수 생성
    let first = 0;
    let secound = 1;

    //함수를 생성
    function sum(a, b) {
        //num이 1보다 작으면 리턴
        if (num <= 1) return 0;
        //num이 0이 될 때까지 num--
        num--;
        first = b;
        secound = a + b;
        //인자값을 받아 계속 더함
        return secound + sum(first, secound);
    }

    sum(first, secound);
    //두번째 숫자 리턴
    return secound;
}

//답변
function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

result(fib(4)); // 3
result(fib(10)); // 55
result(fib(28)); // 317811
result(fib(35)); // 9227465
