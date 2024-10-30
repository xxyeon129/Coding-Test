function solution(s) {
        const numberWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let answer = s;
    
    for(let i = 0; i < numberWords.length; i++) {
        let arr = answer.split(numberWords[i]);
        answer = arr.join(i);
    }
    
    return +answer;
    
}