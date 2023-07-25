function solution(nums) {
    let answer = 0;
    const sumArray = [];
    
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            for(let k = j+1; k < nums.length; k++){
                sumArray.push(nums[i] + nums[j] + nums[k]);
            }
        }
    }
    // const set = new Set(sumArray);
    // const noDupArray = [...set];
    
    for(let i = 0; i < sumArray.length; i++){
        for(let j = 2; j < sumArray[i]; j++){
            if(sumArray[i] % j === 0) {
                break;
            }
            if(j === sumArray[i] - 1) answer++;
        }
    }
    
    return answer;
}