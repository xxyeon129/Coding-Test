function solution(N, stages) {
    const stagesArray = Array(N).fill(0);
    
    for(let stage = 1; stage <= N; stage++){
        let onStage = 0;
        let fail = 0;
        
        stages.forEach(el => {
            if(el >= stage) onStage++;
            if(el === stage) fail++;
        });
        
        stagesArray[stage-1] = fail / onStage;
    }

    const failRatioArray = stagesArray.map((failRatio, stage) => ({failRatio, stage}));
    failRatioArray.sort((a,b) => b.failRatio - a.failRatio);
    
    const answer = failRatioArray.map(el => el.stage + 1); 
    
    return answer;
}