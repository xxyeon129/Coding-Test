function solution(s) {
    let answer;
    const middle = Math.floor(s.length / 2);

    if (s.length % 2 === 0) {
        // 길이가 짝수인 경우
        answer = s.slice(middle - 1, middle + 1);
    } else {
        // 길이가 홀수인 경우
        answer = s[middle];
    }

    return answer;
}