function solution(ingredient) {
    let answer = 0;
    
    // 시간초과 - 문자열 사용 풀이
    // let ingredientString = ingredient.join('');
    // let index = ingredientString.indexOf('1231');
    // while(index !== -1){
    //     answer++;
    //     ingredientString = ingredientString.substring(0, index) + ingredientString.substring(index + 4);
    //     index = ingredientString.indexOf('1231');
    // }
    
    const stack = [];
    
     for(let i = 0; i < ingredient.length; i++){
         stack.push(ingredient[i]);
         if(stack[stack.length - 1] === 1 
            && stack[stack.length - 2] === 3 
            && stack[stack.length - 3] === 2 
            && stack[stack.length - 4] === 1){
             answer++;
             stack.splice(stack.length - 4, 4);
         }
     }   
    
    return answer;
}