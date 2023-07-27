function solution(s, n) {
    const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === ' ') continue;
        
        const alphabet = upperAlphabet.includes(s[i]) ? upperAlphabet : lowerAlphabet;
        const index = alphabet.indexOf(s[i]);
        const replaceChar = alphabet[(index + n) % alphabet.length];
        
        s = s.substring(0, i) + replaceChar + s.substring(i + replaceChar.length);
    }
    
    return s;
}