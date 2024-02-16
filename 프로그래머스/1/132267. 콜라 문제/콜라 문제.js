function solution(a, b, n) {
    let result = 0;
    let currentColaNum = n;
    
    while(currentColaNum >= a){
        const getColaNum = Math.floor(currentColaNum / a) * b;
        currentColaNum = (currentColaNum % a) + getColaNum
        result += getColaNum;
    }
    
    return result;
}