function solution(s){
    const splitStr = s.toUpperCase().split('');
    const pCount = splitStr.filter(el => el === 'P');
    const yCount = splitStr.filter(el => el === 'Y');
    
    return pCount.length === yCount.length;
    
}