function solution(s) {
    const sArr = s.split(' ').map(s => {
        return +s;
    }).sort((a, b) => a - b);
    
    return `${sArr[0]} ${sArr[sArr.length -1]}`;
}