/*
function same(arr1, arr2) {
    //arr1과 arr2를 정렬한다.
    arr1 = arr1.sort();
    arr2 = arr2.sort();

    //arr1의 제곱을 arr2의 index와 비교한다
    for (let i = 0; i < arr1.length; i++) {
        let first = arr1[i];
        let secound = arr2[i];
        if (secound !== first * first) {
            return false;
        }
    }
    return true;
    //비교했을 때 true면 넘어가고 false면 false를 반환한다.
}
*/

/*
//코드 리팩토링
function same(arr1, arr2) {
    //arr1과 arr2를 정렬한다.
    arr1 = arr1.sort();
    arr2 = arr2.sort();

    //arr1의 제곱을 arr2의 index와 비교한다
    const result =
        arr1.length === arr2.length &&
        arr1.every((value, index) => value ** 2 === arr2[index]);

    return result;
    //비교했을 때 true면 넘어가고 false면 false를 반환한다.
}
*/

//답변
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    for (let key in frequencyCounter1) {
        //arr2안에 arr1제곱이 없으면 false
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }

        //객체 안 개수의 숫자가 같지 않으면 false
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

result(same([1, 2, 3, 2], [4, 1, 9, 4])); //true
result(same([1, 2, 3], [1, 9])); //false
result(same([1, 2, 1], [4, 4, 1])); //false

function result(value) {
    console.log(value);
}
