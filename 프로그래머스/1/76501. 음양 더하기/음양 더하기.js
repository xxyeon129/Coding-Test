function solution(absolutes, signs) {
    const newAbs = [];
    
    for(let i = 0; i < absolutes.length; i++){
        // sign의 요소가 false인 경우 -붙인 요소 배열에 넣기
        if(signs[i] === false){
            newAbs.push(-absolutes[i]);
        }else{
            // 아닐 경우 요소를 그대로 넣기
            newAbs.push(absolutes[i]);
        }      
    }
    let result = newAbs.reduce((acc, cur) => acc += cur);
    
    return result;
}