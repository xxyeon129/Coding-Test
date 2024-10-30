function solution(s) {
    let answer = s;
    
    const numberWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    for(let i = 0; i < numberWords.length; i++){
        if(answer.indexOf(numberWords[i]) === -1) {  
            continue;
        };
        
        while(answer.indexOf(numberWords[i]) !== -1){
            answer = answer.replace(numberWords[i], i);
        }
    }
    
    return +answer;
    
}