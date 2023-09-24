function solution(cards1, cards2, goal) {
    let cards1Array = [...cards1];
    let cards2Array = [...cards2];
    const compareArray = [];
    
    for(let i = 0; i < goal.length; i++){
        if(cards1Array[0] === goal[i]){
            compareArray.push(cards1Array[0]);
            cards1Array.shift();
        }
        if(cards2Array[0] === goal[i]){
            compareArray.push(cards2Array[0]);
            cards2Array.shift();
        }
    }
    
    return compareArray.toString() === goal.toString() ? 'Yes' : 'No';
}