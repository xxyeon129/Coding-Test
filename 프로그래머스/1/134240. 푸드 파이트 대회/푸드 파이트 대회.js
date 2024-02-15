function solution(food) {
    let result = '';

    for(let i = 1; i < food.length; i++){
        if(food[i] !== 1){
            result += `${i}`.repeat(Math.floor(food[i] / 2));
        }
    }

    return result + '0' + result.split("").reverse().join("");
}