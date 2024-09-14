function solution(k, score) {
    const answer = [];
    const honorArr = [];
    
    const getHonorArr = (scoreElement) => {
        honorArr.push(scoreElement);
        honorArr.sort((a,b) => b-a);
    }
    
    score.forEach((e) => {
        if(honorArr.length < k) {
            getHonorArr(e);
            answer.push(honorArr[honorArr.length - 1]);
        } else {
            getHonorArr(e);
            honorArr.pop();
            answer.push(honorArr[honorArr.length - 1]);
        }
    })
    
    return answer;
}