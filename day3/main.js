function result(value) {
    console.log(value);
}

//문제1. Frequency Counter - sameFrequency

//방법1
function sameFrequency(num1, num2) {
    //비교할 객체를 담을 변수를 만든다.
    let frequency = {};
    //num1을 반복문으로 돌려서 비교 객체에 넣어준다.
    for (let value of num1 + "") {
        frequency[value] ? (frequency[value] += 1) : (frequency[value] = 1);
    }
    //num2를 반복문으로 돌려 frequency와 비교해 개수를 빼준다.
    for (let value of num2 + "") {
        if (frequency[value]) {
            frequency[value] -= 1;
        } else {
            //이 때 없는 키 이거나 벨류가 0일 때 false를 반환한다.
            return false;
        }
    }
    return true;
}

//코드 리팩토링
function sameFrequency(num1, num2) {
    let strNum1 = num1 + "";
    let strNum2 = num2 + "";

    if (strNum1.length !== strNum2.length) return false;

    //비교할 객체를 담을 변수를 만든다.
    let frequency = {};
    //strNum1을 반복문으로 돌려서 비교 객체에 넣어준다.
    for (let value of strNum1 + "") {
        frequency[value] ? (frequency[value] += 1) : (frequency[value] = 1);
    }
    //strNum2를 반복문으로 돌려 frequency와 비교해 개수를 빼준다.
    for (let value of strNum2 + "") {
        if (frequency[value]) {
            frequency[value] -= 1;
        } else {
            //이 때 없는 키 이거나 벨류가 0일 때 false를 반환한다.
            return false;
        }
    }
    return true;
}

//방법2
function sameFrequency(num1, num2) {
    //비교할 변수를 만든다.
    let frequency = 0;
    //num1을 반복문으로 돌려서 변수에 더해준다.
    for (let value of num1 + "") {
        frequency += parseInt(value);
    }
    //num2를 반복문으로 돌려 비교 변수에서 빼준다.
    for (let value of num2 + "") {
        frequency -= parseInt(value);
    }
    //변수의 값이 0이면 true
    return frequency === 0 ? true : false;
}

result(sameFrequency(182, 281)); // true
result(sameFrequency(34, 14)); // false
result(sameFrequency(3589578, 5879385)); // true
result(sameFrequency(22, 222)); // false
console.clear();

//문제2. Frequency Counter / Multiple Pointers - areThereDuplicates

//방법1
function areThereDuplicates(...num) {
    //객체를 하나 생성한다.
    let frequency = {};

    //num을 객체에 담는다.
    for (let i in num) {
        let value = num[i];
        //객체 안에 값이 있을 경우 true를 반환한다.
        if (frequency[value]) {
            return true;
        } else {
            frequency[value] = 1;
        }
    }
    return false;
}

//방법2
function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
}

//방법3
function areThereDuplicates() {
    let collection = {};

    for (let val in arguments) {
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
    }
    for (let key in collection) {
        if (collection[key] > 1) return true;
    }
    return false;
}

result(areThereDuplicates(1, 2, 3)); // false
result(areThereDuplicates(1, 2, 2)); // true
result(areThereDuplicates("a", "b", "c", "a")); // true
console.clear();

//문제3. Multiple Pointers - averagePair

function averagePair(arr, ave) {
    //arr의 배열의 개수가 1개 이하라면 false를 반환한다.
    if (arr.length <= 1) return false;
    //포인터가 있는 두개의 i, j변수를 만든다.
    let i = 0;
    let j = 1;
    //비교를 해서 평균값이 나오면 true 아니면

    //j 포인터를 하나씩 옮겨가며 j가 배열 끝지점에 도달하면 i의 포인터를 한칸 앞으로 전진하고
    //j의 포인터를 i보다 한칸 앞으로 전진한다.
    //이때 i가 배열의 끝 지점보다 한칸 앞일 경우 전진하지 않고 false를 반환한다.
}

result(averagePair([1, 2, 3], 2.5)); // true
result(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
result(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
result(averagePair([], 4)); // false
