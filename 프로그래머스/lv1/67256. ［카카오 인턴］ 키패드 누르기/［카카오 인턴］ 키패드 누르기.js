function solution(numbers, hand) {
    let answer = '';
    
    const keypad = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        ['*', 0, '#']
    ]
    
    const right = {position: '#', index: [3, 2]};
    const left = {position: '*', index: [3, 0]};
    
    for(let i = 0; i < numbers.length; i++){
        const numberPosition = numbers[i];
        
        if(numberPosition === 1 || numberPosition === 4 || numberPosition === 7) {
            answer += 'L';
            left.position = numberPosition;

            keypad.forEach((row, index) => {
                for(let i = 0; i < row.length; i++){
                    if(row[i] === numberPosition){
                        left.index.splice(0, 1, index);
                        left.index.splice(1, 1, i);
                    }
                }
            });
            
        }else if(numberPosition === 3 || numberPosition === 6 || numberPosition === 9){
            answer += 'R';
            right.position = numberPosition;
            
            keypad.forEach((row, index) => {
                for(let i = 0; i < row.length; i++){
                    if(row[i] === numberPosition){
                        right.index.splice(0, 1, index);
                        right.index.splice(1, 1, i);
                    }
                }
            });
            
        }else{
            for(let j = 0; j < keypad.length; j++){
            
                keypad.forEach((row, index) => {
                    if(row[j] === numberPosition){

                        const rightLength = Math.abs(index - right.index[0]) + Math.abs(j - right.index[1]);
                        const leftLength = Math.abs(index - left.index[0]) + Math.abs(j - left.index[1]);
                   
                        if(leftLength < rightLength || (leftLength === rightLength && hand === 'left')){
                            answer += 'L';
                            left.position = numberPosition;
                            left.index.splice(0, 1, index);
                            left.index.splice(1, 1, j);
                        }else {
                            answer += 'R';
                            right.position = numberPosition;
                            right.index.splice(0, 1, index);
                            right.index.splice(1, 1, j);
                        }
                    }
                });
            }
        }  
    }
        
    return answer;
}