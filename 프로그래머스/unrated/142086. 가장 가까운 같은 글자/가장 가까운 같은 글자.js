function solution(s) {
    const sArray = [...s];
    
    return [...s].map((el, index) => {
        if(s.indexOf(el) === index) {
            return -1;
        }else{
            const findStr = s.slice(0, index);
            const distance = index - findStr.lastIndexOf(el);
            return distance;
        }
    });
}