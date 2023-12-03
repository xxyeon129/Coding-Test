function solution(n) {
    if(n < 4){
        return n === 1 ? 4 : -1
    }
    
    let answer = -1;
    
    Number.isInteger(Math.sqrt(n)) ? answer = Math.pow(Math.sqrt(n)+1,2) : null
    
    return answer;
}