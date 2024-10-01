function solution(s){
    const sArr = s.split('');
    const stack = [];
    
    for(let i = 0; i < sArr.length; i++) {
        if(sArr[i] === '(') {
            stack.push(sArr[i]);
        }else {
            if(stack[stack.length - 1] === '(') {
                stack.pop();
            }else {
                stack.push(sArr[i]);
            } 
        }
    } 
    
    return stack.length === 0 ? true : false;
}