function solution(s) {
    const sArr = s.split(' ');
    
    return `${Math.min(...sArr)} ${Math.max(...sArr)}`;
}