function solution(numbers, hand) {
    let answer = '';
    
    const keypad = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        ['*', 0, '#']
    ]
    
    const right = [3, 2];
    const left = [3, 0];
    
    for(let i = 0; i < numbers.length; i++){
        const numberPosition = numbers[i];
        
        if(numberPosition === 1 || numberPosition === 4 || numberPosition === 7) {
            answer += 'L';

            keypad.forEach((row, index) => {
                for(let i = 0; i < row.length; i++){
                    if(row[i] === numberPosition){
                        left.splice(0, 1, index);
                        left.splice(1, 1, i);
                    }
                }
            });
            
        }else if(numberPosition === 3 || numberPosition === 6 || numberPosition === 9){
            answer += 'R';
            
            keypad.forEach((row, index) => {
                for(let i = 0; i < row.length; i++){
                    if(row[i] === numberPosition){
                        right.splice(0, 1, index);
                        right.splice(1, 1, i);
                    }
                }
            });
            
        }else{
            for(let j = 0; j < keypad.length; j++){
            
                keypad.forEach((row, index) => {
                    if(row[j] === numberPosition){

                        const rightLength = Math.abs(index - right[0]) + Math.abs(j - right[1]);
                        const leftLength = Math.abs(index - left[0]) + Math.abs(j - left[1]);
                   
                        if(leftLength < rightLength || (leftLength === rightLength && hand === 'left')){
                            answer += 'L';
                            left.splice(0, 1, index);
                            left.splice(1, 1, j);
                        }else {
                            answer += 'R';
                            right.splice(0, 1, index);
                            right.splice(1, 1, j);
                        }
                    }
                });
            }
        }  
    }
        
    return answer;
}