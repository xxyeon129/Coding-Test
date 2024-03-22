function solution(s) {
    let answer;
    const middle = Math.floor(s.length / 2);

    if (s.length % 2 === 0) {
        answer = s.slice(middle - 1, middle + 1);
    } else {
        answer = s[middle];
    }

    return answer;
}