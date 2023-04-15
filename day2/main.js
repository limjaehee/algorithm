function result(value) {
    console.log(value);
}

//아나그램 테스트
/*
function validAnagram(str1, str2) {
    //str1과 str2의 개수를 비교하여 다르면 false를 리턴한다.
    if (str1.length !== str2.length) {
        return false;
    }
    //str1을 알파벳과 개수가 있는 객체로 만든다
    let objectStr1 = {};
    for (let value of str1) {
        objectStr1[value] = (objectStr1[value] || 0) + 1;
    }
    //str2에 for문으로 돌려서 개수를 하나씩 빼준다.
    for (let value of str2) {
        if (objectStr1[value]) {
            objectStr1[value] -= 1;
        } else {
            //str1 객체의 개수가 0보다 낮으면 false
            return false;
        }
    }
    return true;
}
*/

//코드 리팩토링
function validAnagram(str1, str2) {
    //str1과 str2의 개수를 비교하여 다르면 false를 리턴한다.
    if (str1.length !== str2.length) {
        return false;
    }
    //str1을 알파벳과 개수가 있는 객체로 만든다
    let lookup = {};
    for (let value of str1) {
        lookup[value] = (lookup[value] || 0) + 1;
    }
    //str2에 for문으로 돌려서 개수를 하나씩 빼준다.
    for (let value of str2) {
        if (lookup[value]) {
            lookup[value] -= 1;
        } else {
            //str1 객체의 개수가 0보다 낮으면 false
            return false;
        }
    }
    return true;
}

result(validAnagram("", "")); //true
result(validAnagram("aaz", "zza")); //false
result(validAnagram("anagram", "nagaram")); //true

console.clear();

//고유값 세기 솔루션
/*
function countUniqueValues(arr) {
    if (!arr.length) {
        return 0;
    }

    //i와 j를 만든다
    let i = 0;
    let j = 1;

    //j의 포인터가 배열의 끝에 갈 때까지의 반복문을 만든다
    while (j < arr.length) {
        //i와 j를 비교하여 다를 때
        //arr[i]의 값을 j로 변경시켜 주고 i는 한칸 전진한다
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        } else {
            //i와 j를 비교하여 같을 때
            //j만 한칸 전진한다.
            j++;
        }
    }
    //i의 개수를 리턴한다.
    return i + 1;
}
*/

//답변
function countUniqueValues(arr) {
    if (!arr.length) {
        return 0;
    }

    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

result(countUniqueValues([1, 1, 1, 1, 2]));
result(countUniqueValues([1, 2, 3, 4, 4, 4, 5, 5, 12, 12, 13]));
result(countUniqueValues([])); // 0
result(countUniqueValues([-2, -1, -1, 0, 1])); // 4
