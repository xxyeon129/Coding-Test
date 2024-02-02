function solution(t, p) {
    let result = 0;
    const tArray = [];
    
    for(let i = 0; i <= t.length - p.length; i++){
        tArray.push(t.slice(i, i + p.length));
        +tArray[i] <= +p && result++;
    }
    
    return result;
}