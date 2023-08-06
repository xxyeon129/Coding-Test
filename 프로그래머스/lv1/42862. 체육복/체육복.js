function deleteLostElement(lost, number) {
    const deleteIndex = lost.findIndex((el) => el === number);
    if(deleteIndex === -1) return;
    
    lost.splice(deleteIndex, 1);
}

function solution(n, lost, reserve) {
    const filteredReserve = reserve.filter(el => !(lost.includes(el))).sort((a,b) => a-b);
    const filteredLost = lost.filter(el => !(reserve.includes(el))).sort((a,b) => a-b);
    
    for(let i = 0; i < filteredReserve.length; i++){
        if(filteredLost.includes(filteredReserve[i] - 1)){
            deleteLostElement(filteredLost, filteredReserve[i] - 1);
        }else if(filteredLost.includes(filteredReserve[i] + 1)){
            deleteLostElement(filteredLost, filteredReserve[i] + 1);
        }
        if(filteredLost.length === 0) break;
    }
    
    return n - filteredLost.length;
}