function solution(d, budget) {
    let result = 0;
    
    d.sort((a,b) => a - b);
    for(const department of d){
        if (department > budget) break;
        result += 1;
        budget -= department;
    }
    
    return result;
}