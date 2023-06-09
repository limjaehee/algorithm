//문제6. Sliding Window - minSubArrayLen

//방법1
function minSubArrayLen(arr, num) {
    //개수를 담을 len 변수를 하나 만든다
    let len = 1;
    //len의 값이 배열의 길이가 될 때까지 반복문을 돌린다.
    while (len < arr.length) {
        //sum 변수를 하나 만들어 len 값만큼 반복문으로 더해준다.
        let sum = 0;

        for (let i = 0; i < len; i++) {
            sum += arr[i];
        }

        if (sum >= num) {
            return len;
        }

        //배열 반복문을 만들어 sum의 값을 변환해가며 슬라이딩 한다.
        for (let i = len; i < arr.length; i++) {
            sum = sum + arr[i] - arr[i - len];

            //num보다 크면 len을 반환한다.
            if (sum >= num) {
                return len;
            }
        }

        len++;
    }

    return 0;
}

//방법2
function minSubArrayLen(arr, num, len = 1) {
    //sum 변수를 만든다
    let sum = 0;
    //배열의 길이만큼 반복문을 돌린다
    for (let i = 0; i < len; i++) {
        sum += arr[i];
    }

    if (sum >= num) {
        return len;
    }

    //sum이 num보다 크거나 같으면 길이를 반환한다.
    for (let i = len; i < arr.length; i++) {
        sum = sum - arr[i - len] + arr[i];

        if (sum >= num) {
            return len;
        }
    }

    //배열의 길이가 len보다 클 때 len 길이를 추가하고 함수를 다시 부른다
    if (arr.length >= len) {
        return minSubArrayLen(arr, num, len + 1);
    } else {
        return 0;
    }
}

//답변
function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < nums.length) {
        // if current window doesn't add up to the given sum then
        // move the window to right
        if (total < sum && end < nums.length) {
            total += nums[end];
            end++;
        }
        // if current window adds up to at least the sum given then
        // we can shrink the window
        else if (total >= sum) {
            minLen = Math.min(minLen, end - start);
            total -= nums[start];
            start++;
        }
        // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
        else {
            break;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}

result(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> [4,3]
result(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> [5,4]
result(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> [62]
result(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3 -> [16,22,5]
result(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5 -> [16,22,5,7,8]
result(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2 -> [3,8]
result(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
