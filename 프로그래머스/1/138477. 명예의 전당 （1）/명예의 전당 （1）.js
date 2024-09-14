function solution(k, score) {
    const answer = [];
    const honorArr = [...score.slice(0, k)];
    let minScore = score[0];

    const answerLengthBeforeK = k > score.length ? score.length : k;
    
    for(let i = 0; i < answerLengthBeforeK; i++){
        if(score[i] < minScore) {
            answer.push(score[i]);
            minScore = score[i];
        }else{
            answer.push(minScore);
        }
    }

    score.slice(k).forEach((e) => {
        if(e > minScore) {
            honorArr.splice(honorArr.indexOf(minScore), 1);
            honorArr.push(e);
        }
        minScore = Math.min.apply(null, honorArr);
        answer.push(minScore);
    }) 
 
    
    return answer;
}