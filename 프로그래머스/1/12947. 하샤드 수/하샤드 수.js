function solution(x) {
    if(x < 10) true;
 
    const arr = String(x).split("")
    let sum = arr.reduce((acc, cur) => acc + Number(cur), 0)
    
    return x % sum === 0;
}