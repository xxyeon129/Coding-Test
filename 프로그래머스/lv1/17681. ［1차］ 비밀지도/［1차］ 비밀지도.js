function decodeArr(arr, n){
    return arr.map(el => {
        el = el.toString(2)
        if(el.length < n) el = el.padStart(n, '0');
        return el;
    })
}

function getMap(arr){
    return arr.map(el => {
        const changeEl = el.split('').map(char => (char === '1' ? '#' : ' ')).join('');
        return changeEl;
    });
}

function solution(n, arr1, arr2) {
    const answer = [];
    
    const decodeArr1 = decodeArr(arr1, n);
    const decodeArr2 = decodeArr(arr2, n);
    
    const map1 = getMap(decodeArr1);
    const map2 = getMap(decodeArr2);
    
    for(let i = 0; i < n; i++){
        let mapChar = ''
        for(let j = 0; j < n; j++){ 
           mapChar = (map1[i][j] === '#' || map2[i][j] === '#') ? mapChar + '#' : mapChar + ' ';
        }
        answer.push(mapChar);
    }
    
    return answer;
}