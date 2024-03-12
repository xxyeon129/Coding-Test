function solution(arr, divisor) {
    const answer = [];
    arr.sort((a,b) => a-b).forEach(el => {
        if(el % divisor === 0){
            answer.push(el)
        }
    })
    
    return answer.length === 0 ? [-1] : answer;
}