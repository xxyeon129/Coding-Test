function solution(n, m) { 
    const max = (a, b) => {
        if(b === 0) return a;
        return max(b, a % b);
    }
    
    const least = (a, b) => (a * b) / max(a, b);
    return [max(n,m), least(n,m)]
}