function solution(s){
    const splitStr = s.toUpperCase().split('');
    return splitStr.filter(el => el === 'P').length === splitStr.filter(el => el === 'Y').length;
    
}