function solution(s) {
    return [...s].map((el, index) => {
        const distance = s.slice(0, index).lastIndexOf(el);
        return distance < 0 ? distance : index - distance;
    });
}