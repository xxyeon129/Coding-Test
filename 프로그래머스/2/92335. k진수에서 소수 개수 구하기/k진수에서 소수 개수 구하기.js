function solution(n, k) {
    let answer = 0;
    let num = '';
    
    if(k != 10) {
       while(n > 0) {
           num = (n % k) + num;
           n = Math.floor(n/k);
       } 
    }else {
        num = `${n}`;
    }
    
    num = num.split('0').filter(e => e !== '1' && e !== '');
    
    for(let i = 0; i < num.length; i++){
        const number = +num[i]
        let isPrime = true;
        
        for(let j=2; j <= Math.sqrt(number); j++){
            if(number % j === 0) {
                isPrime = false;
                break;
            }
        }
        
        if(isPrime) answer++;
    }
    
    return answer;
}