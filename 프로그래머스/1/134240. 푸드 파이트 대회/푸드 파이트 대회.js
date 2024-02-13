function solution(food) {
    let result = '';
    
    for(let i = 1; i < food.length; i++){
        if(food[i] % 2 === 1 && food[i] !== 1){
            result += `${i}`.repeat((food[i] - 1) / 2);
        }
        if(food[i] % 2 === 0){
            result += `${i}`.repeat(food[i] / 2);
        }
    }
    
    result = result + '0' + result.split("").reverse().join("");
    
    return result;
}