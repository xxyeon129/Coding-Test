function solution(dartResult) {
    const scoreArray = [];
    
    for(let i = 0; i < dartResult.length; i++){
        if(isNaN(Number(dartResult[i])) || (dartResult[i] === '0' && dartResult[i - 1] === '1')) continue;
        
        let score = Number(dartResult[i]);
        if(dartResult[i] === '1' && dartResult[i + 1] === '0') score = 10;
        
        if(score === 10){
            if(dartResult[i + 2] === 'D') score = score ** 2;
            else if(dartResult[i + 2] === 'T') score = score ** 3;

            if(dartResult[i + 3] === '*'){
                if(scoreArray.length === 0){
                    score *= 2;
                }else{
                    scoreArray.splice(scoreArray.length - 1, 1, scoreArray[scoreArray.length - 1] * 2);
                    score *= 2;

                }

            }else if(dartResult[i + 3] === '#'){
                score *= -1;
            }
            
        }else{
            if(dartResult[i + 1] === 'D') score = score ** 2;
            else if(dartResult[i + 1] === 'T') score = score ** 3;

            if(dartResult[i + 2] === '*'){
                if(scoreArray.length === 0){
                    score *= 2;
                }else{
                    scoreArray.splice(scoreArray.length - 1, 1, scoreArray[scoreArray.length - 1] * 2);
                    score *= 2;

                }

            }else if(dartResult[i + 2] === '#'){
                score *= -1;
            }
        }
        
        
        scoreArray.push(score);
    }
    
    return scoreArray.reduce((acc,cur) => acc + cur);
    
}