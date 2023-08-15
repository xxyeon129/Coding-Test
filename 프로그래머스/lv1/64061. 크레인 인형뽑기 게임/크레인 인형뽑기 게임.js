function solution(board, moves) {
    const basket = [];
    let answer = 0;
    
    for(let i = 0; i < moves.length; i++){
        const grapLine = moves[i];
        
        for(let j = 0; j < board.length; j++){
            if(board[j][grapLine - 1] !== 0){
                basket.push(board[j][grapLine - 1]);
                board[j].splice(grapLine - 1, 1, 0);
                break;
            }
        }
    }
    
    for(let i = 0; i < basket.length; i++){
        if(basket[i] === basket[i + 1]){
            basket.splice(i, 2);
            answer += 2;
            i = -1;
        }
    }
    
    return answer;
}