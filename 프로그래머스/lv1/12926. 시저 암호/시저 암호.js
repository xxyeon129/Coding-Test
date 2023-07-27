function replaceAlphabet(s, replaceChar, i) {
    return s.substring(0, i) + replaceChar + s.substring(i + replaceChar.length)
}

function solution(s, n) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === ' ') continue;
        const index = alphabet.indexOf(s[i]);
        
        if(index === -1) {
            const index = alphabet.indexOf(s[i].toLowerCase());
            
            const replaceChar = alphabet[(index + n) % alphabet.length].toUpperCase();
            s = replaceAlphabet(s, replaceChar, i)
            continue;
        }
        
        const replaceChar = alphabet[(index + n) % alphabet.length]
        s = replaceAlphabet(s, replaceChar, i);
    }
    
    return s;
}