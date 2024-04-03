process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const result = ("*".repeat(Number(n[0])) + "\n").repeat(Number(n[1]));
    
    console.log(result);
});