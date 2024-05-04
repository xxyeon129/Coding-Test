function solution(n) {
    const arr3 = [];
    
    while( n > 0){
        const remain = n % 3
        n = Math.floor(n / 3)    
        arr3.push(remain)
    }

    let answer = 0;
    
    for(let i = 0; i < arr3.length; i++){
        const idx = arr3.length - 1 - i;
        answer += +arr3[i] * (3 ** idx)
    }

    return answer  
}