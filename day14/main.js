//문제. 합병 정렬
function merge(arr1, arr2) {
    //변수 생성 - 빈 배열
    let result = [];
    //루프 생성
    let i = 0;
    let j = 0;
    while (result.length < arr1.length + arr2.length) {
        //같은 숫자가 있을 때 에러가 남
        if (arr1[i] > arr2[j]) {
            result.push(arr2[j]);
            j++;
        } else if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else if (i === arr1.length) {
            result = result.concat(arr2.slice(j, arr2.length));
            break;
        } else if (j === arr1.length) {
            result = result.concat(arr1.slice(i, arr1.length));
            break;
        }
    }

    //배열 반환
    return result;
}

//솔루션
function merge(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] > arr2[j]) {
            result.push(arr2[j]);
            j++;
        } else {
            result.push(arr1[i]);
            i++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

function mergeSort(arr) {
    if (arr.length <= 2) {
        if (arr[0] > arr[1]) {
            return [arr[1], arr[0]];
        }
        return arr;
    }

    let left = arr.slice(0, arr.length / 2);
    let right = arr.slice(arr.length / 2);

    return merge(mergeSort(left), mergeSort(right));
}

//솔루션
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

result(mergeSort([10, 24, 76, 73]));
