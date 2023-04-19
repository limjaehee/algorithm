//문제5. Sliding Window - maxSubarraySum

function maxSubarraySum(arr, num) {
    //배열의 개수가 주어진 num의 개수보다 작을 때 null을 반환
    if (arr.length < num) return null;
    //합계 변수를 만들고
    let max = -Infinity;
    //인덱스 변수를 만들고
    let i = 0;
    //while문을 돌려 인덱스가 도달할 때까지
    while (i <= arr.length - num) {
        let sum = 0;
        for (let j = 0; j < num; j++) {
            sum += arr[i + j];
        }
        //합계를 비교한다.
        if (sum > max) max = sum;
        i++;
    }
    return max;
}

//답변
function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;

    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

result(maxSubarraySum([100, 200, 300, 400], 2)); // 700
result(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
result(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
result(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
result(maxSubarraySum([2, 3], 3)); // null
