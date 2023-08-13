function solution(numbers, hand) {
    let answer = '';
    
    const keypad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        0: [3, 1]
    }

    let rightPosition = [3, 2];
    let leftPosition = [3, 0];
    
    for(let i = 0; i < numbers.length; i++){
        const numberPosition = numbers[i];
        
        if(numberPosition === 1 || numberPosition === 4 || numberPosition === 7) {
            answer += 'L';
            leftPosition = keypad[numberPosition];
            
        }else if(numberPosition === 3 || numberPosition === 6 || numberPosition === 9){
            answer += 'R';
            rightPosition = keypad[numberPosition];
            
        }else{
            const rightLength = Math.abs(keypad[numberPosition][0] - rightPosition[0]) + Math.abs(keypad[numberPosition][1] - rightPosition[1]);
            const leftLength = Math.abs(keypad[numberPosition][0] - leftPosition[0]) + Math.abs(keypad[numberPosition][1] - leftPosition[1]);
            
            if(leftLength < rightLength || (leftLength === rightLength && hand === 'left')){
                answer += 'L';
                leftPosition = keypad[numberPosition];
            }else {
                answer += 'R';
                 rightPosition = keypad[numberPosition];
            }
            
        }
    }
        
    return answer;
}