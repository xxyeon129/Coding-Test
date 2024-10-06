function solution(array, commands) {
    const answer = [];
    
    for(let i = 0; i < commands.length; i++){
        const command = commands[i];
        const sliceArray = array.slice(command[0]-1, command[1]);
        const sortArray = sliceArray.sort((a,b) => a-b);
        
        answer.push(sortArray[command[2]-1])
    }
    
    return answer; 
}