//문제7. Sliding Window - findLongestSubstring

function findLongestSubstring(str) {
    //str의 개수가 0이면 0을 반환한다.
    if (!str.length) return 0;
    //len 변수를 만든다 - 가장 긴 글자 수
    let len = 0;
    //temp 변수를 만든다 - 비교하기 위함
    let temp = 0;
    //obj 변수를 만든다 - 비교하기 위함 - 글자의 인덱스를 저장
    let obj = {};
    //str을 for문으로 돌린다.
    for (let i = 0; i < str.length; i++) {
        let value = str[i];
        //obj에 같은 글자를 만나면 해당 위치를 파악 후 현재 인덱스에서 빼준다
        if (obj[value] && temp > i - obj[value]) {
            //빼준 값은 temp에 저장
            temp = i + 1 - obj[value];
        } else {
            temp++;
        }
        //obj에 해당 위치와 글자를 담는다
        obj[value] = i + 1;
        //len과 비교하여 길면 len에 저장
        if (len < temp) len = temp;
    }
    return len;
}

//답변
function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
        // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char so as to not double count
        seen[char] = i + 1;
    }
    return longest;
}

result(findLongestSubstring("")); // 0
result(findLongestSubstring("rithmschool")); // 7
result(findLongestSubstring("thisisawesome")); // 6
result(findLongestSubstring("thecatinthehat")); // 7
result(findLongestSubstring("bbbbbb")); // 1
result(findLongestSubstring("longestsubstring")); // 8
result(findLongestSubstring("thisishowwedoit")); // 6
