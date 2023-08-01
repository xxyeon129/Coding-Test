function solution(n) {  
    const countArray = Array(n + 1).fill(true).fill(false, 0, 2);
    
    for(let i = 2; i * i <= n; i++){
        if(countArray[i]){
            for(let j = i * i; j <= n; j+=i){
                countArray[j] = false;
            }
        }
    }

    return countArray.filter(el => el).length;
}