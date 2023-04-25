//문제4. flatten
function flatten(x) {
    //변수 생성
    let result = [];
    //함수 생성
    function spreadArr(arr) {
        if (!arr.length) {
            //배열의 개수가 0이면 return
            return;
        } else if (Array.isArray(arr[0])) {
            //배열의 첫번째가 배열이면 첫번째 배열 풀고 나머지 배열 붙이고 재귀함수
            let sliceArr = [...arr[0]].concat(arr.slice(1, arr.length));
            return spreadArr(sliceArr);
        } else {
            //배열의 첫번짹 숫자면 push 후 첫번째 제거한 재귀함수
            result.push(arr[0]);
            return spreadArr(arr.slice(1, arr.length));
        }
    }
    spreadArr(x);

    //리턴 변수
    return result;
}

//답변
function flatten(oldArr) {
    var newArr = [];
    for (var i = 0; i < oldArr.length; i++) {
        if (Array.isArray(oldArr[i])) {
            newArr = newArr.concat(flatten(oldArr[i]));
        } else {
            newArr.push(oldArr[i]);
        }
    }
    return newArr;
}

result(flatten([[3], [4], 5])); // [3, 4, 5]
result(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
result(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
result(flatten([[1], [2], [3]])); // [1,2,3]
result(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
console.clear();

//문제5. capitalizeFirst
function capitalizeFirst(arr) {
    //배열의 개수가 0이면 중단
    if (!arr.length) return [];
    //배열의 첫번째의 글자 첫번째를 대문자로 수정한 변수
    let strUp = arr[0][0].toUpperCase() + arr[0].slice(1);
    //리턴 변수 + 재귀함수
    return [strUp].concat(capitalizeFirst(arr.slice(1)));
}

//답변
/** substr은 더 이상 사용되지 않는 속성이다. **/
function capitalizeFirst(array) {
    if (array.length === 1) {
        return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    const res = capitalizeFirst(array.slice(0, -1));
    const string =
        array.slice(array.length - 1)[0][0].toUpperCase() +
        array.slice(array.length - 1)[0].substr(1);
    res.push(string);
    return res;
}

result(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
console.clear();

//문제6. nestedEvenSum
function nestedEvenSum(obj) {
    //sum 변수 생성
    let sum = 0;
    //obj 반복문 생성
    for (let key in obj) {
        let value = obj[key];
        if (typeof value === "number" && value % 2 === 0) {
            //값이 짝수면 더해줌
            sum += value;
        } else if (typeof value === "object") {
            //값이 객체면 재귀함수 실행
            sum += nestedEvenSum(value);
        }
    }
    //리턴 sum
    return sum;
}

//답변
function nestedEvenSum(obj, sum = 0) {
    for (var key in obj) {
        if (typeof obj[key] === "object") {
            sum += nestedEvenSum(obj[key]);
        } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
            sum += obj[key];
        }
    }
    return sum;
}

var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup",
        },
    },
};

var obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: "ball", ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: "car" },
};

result(nestedEvenSum(obj1)); // 6
result(nestedEvenSum(obj2)); // 10
console.clear();

//문제6. capitalizeWords

function capitalizeWords(arr) {
    //배열의 개수가 0이면 리턴
    if (!arr.length) return [];
    //변수 생성 toUppercase 사용
    let strUp = arr[0].toUpperCase();
    //리턴 변수 + 재귀함수
    return [strUp].concat(capitalizeWords(arr.slice(1)));
}

//답변
function capitalizeWords(array) {
    if (array.length === 1) {
        return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length - 1)[0].toUpperCase());
    return res;
}

result(capitalizeWords(["i", "am"])); //['I', 'AM']
console.clear();

//문제7. stringifyNumbers
function stringifyNumbers(obj) {
    //반복문으로 객체를 돌린다
    for (let key in obj) {
        let value = obj[key];
        if (typeof value === "number") {
            //벨류가 숫자면 string로 바꿔준다
            obj[key] = value.toString();
        } else if (typeof value === "object") {
            obj[key] = stringifyNumbers(value);
        }
    }
    //리턴 obj
    return obj;
}

/**
 * 내가 틀린 부분
 * 1. newObj라는 변수를 만들어야 했다
 * 2. array 타입이 아닌 것을 검사해야 했다
 * 3. 조건을 충족하지 못할 시 newObj에 추가해줘야 했다**/
function stringifyNumbers(obj) {
    var newObj = {};
    //반복문으로 객체를 돌린다
    for (let key in obj) {
        let value = obj[key];
        if (typeof value === "number") {
            //벨류가 숫자면 string로 바꿔준다
            newObj[key] = value.toString();
        } else if (typeof value === "object" && !Array.isArray(obj[key])) {
            newObj[key] = stringifyNumbers(value);
        } else {
            newObj[key] = value;
        }
    }
    //리턴 obj
    return newObj;
}

//답변
function stringifyNumbers(obj) {
    var newObj = {};
    for (var key in obj) {
        if (typeof obj[key] === "number") {
            newObj[key] = obj[key].toString();
        } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
            newObj[key] = stringifyNumbers(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

let obj3 = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66,
        },
    },
};

result(stringifyNumbers(obj3));
console.clear();

//문제8. collectStrings
function collectStrings(obj) {
    //변수 생성 (배열)
    let arr = [];
    //obj 반복문
    for (let key in obj) {
        let value = obj[key];

        if (typeof value === "string") {
            //string이면 배열에 push
            arr.push(value);
        } else {
            //아니면 재귀함수 concat 사용
            arr = arr.concat(collectStrings(value));
        }
    }
    //리턴 변수
    return arr;
}

//답변 - Helper 메소드 재귀 버전
function collectStrings(obj) {
    var stringsArr = [];

    function gatherStrings(o) {
        for (var key in o) {
            if (typeof o[key] === "string") {
                stringsArr.push(o[key]);
            } else if (typeof o[key] === "object") {
                return gatherStrings(o[key]);
            }
        }
    }

    gatherStrings(obj);

    return stringsArr;
}

//답변 - 순수 재귀 버전
function collectStrings(obj) {
    var stringsArr = [];
    for (var key in obj) {
        if (typeof obj[key] === "string") {
            stringsArr.push(obj[key]);
        } else if (typeof obj[key] === "object") {
            stringsArr = stringsArr.concat(collectStrings(obj[key]));
        }
    }

    return stringsArr;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz",
                    },
                },
            },
        },
    },
};

result(collectStrings(obj)); // ["foo", "bar", "baz"])
