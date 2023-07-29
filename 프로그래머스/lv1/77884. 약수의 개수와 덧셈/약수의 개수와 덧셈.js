function solution(left, right) {
    let count = 0;
    
    for(let i = left; i <= right; i++){
        const oddArray = [];
        
        for(let j = 1; j <= right; j++){
            if(i % j === 0){
                oddArray.push(j);
            }
        }
        
        count += oddArray.length % 2 === 0 ? i : -i;
    }
    
    return count;
}