function solution(price, money, count) {
    let answer;
    let cost = 0;
    
    // 필요한 요금
    for(let i = 1; i <= count; i++){
        cost += price * i;
    }

    answer = money - cost;
    
    if(answer > 0){
        answer = 0;
    }
    
    return -answer;
}