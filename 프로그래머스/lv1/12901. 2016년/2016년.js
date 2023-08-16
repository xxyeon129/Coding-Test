function solution(month, day) {
    const monthDay = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    const dayOfWeek = ["FRI","SAT", "SUN","MON","TUE","WED","THU"]
    
    let getDiffDay = 0;
    
    if(month !== 1){
        for(let i = 0; i < month - 1; i++){
            getDiffDay += monthDay[i]
        }
        getDiffDay += day -1;
        
    } else{
        if(day < 7){
            return dayOfWeek[day-1]
        }else{
            getDiffDay = day - 1;
        }
    }
    
    return dayOfWeek[getDiffDay % 7];
}