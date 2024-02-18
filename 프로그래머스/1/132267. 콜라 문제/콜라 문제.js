function solution(a, b, n) {
    let result = 0;
    
    while(n >= a){
        const getColaNum = Math.floor(n / a) * b;
        n = (n % a) + getColaNum
        result += getColaNum;
    }
    
    return result;
}