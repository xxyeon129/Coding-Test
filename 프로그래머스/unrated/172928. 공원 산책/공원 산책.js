function solution(park, routes) {
    const parkMap = [];
    
    park.forEach(el => {
        const row = [];
        for(let i = 0; i < el.length; i++){
            row.push(el[i]);
        }
        parkMap.push(row)
    })
    
    let point;
    for(let i = 0; i < parkMap.length; i++){
        const index = parkMap[i].indexOf("S");
        if(index > -1){
            point = [i, index];
            break;
        }
    }
    
    for(let i = 0; i < routes.length; i++){
        const move = parseInt(routes[i][2]);
        
        if(routes[i][0] === "E"){
            for(let j = 0; j <= move; j++){
                if(typeof(parkMap[point[0]]) === "undefined"
                   || parkMap[point[0]][point[1] + j] === "X"
                   || typeof(parkMap[point[0]][point[1] + j]) === "undefined") break;
                if(j === move) point = [point[0], point[1] + move];
            }
        }
        
        if(routes[i][0] === "W"){
            for(let j = 0; j <= move; j++){
                if(typeof(parkMap[point[0]]) === "undefined"
                   || parkMap[point[0]][point[1] - j] === "X"
                   || typeof(parkMap[point[0]][point[1] - j]) === "undefined") break;
                if(j === move) point = [point[0], point[1] - move];
            }
        }
        
        if(routes[i][0] === "S"){
            for(let j = 0; j <= move; j++){
                if(typeof(parkMap[point[0] + j]) === "undefined"
                   || parkMap[point[0] + j][point[1]] === "X"
                   || typeof(parkMap[point[0] + j][point[1]]) === "undefined") break;
                if(j === move) point = [point[0] + move, point[1]];
            }
        }
        
        if(routes[i][0] === "N"){
            for(let j = 0; j <= move; j++){
                if(typeof(parkMap[point[0] - j]) === "undefined"
                   || parkMap[point[0] - j][point[1]] === "X"
                   || typeof(parkMap[point[0] - j][point[1]]) === "undefined") break;
                if(j === move) point = [point[0] - move, point[1]];
            }
        }
    }
    
    return point;
}