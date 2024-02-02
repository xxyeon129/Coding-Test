function solution(t, p) {
    let result = 0;
    const tArray = [];
    
    for(let i = 0; i < t.length; i++){
        tArray.push(t.slice(i, i + p.length));
    }
    
    const filteredTArray = tArray.filter(el => el.length === p.length);
    
    filteredTArray.forEach(el => {
        if(+el <= +p) result++;
    })
    
    return result;
}