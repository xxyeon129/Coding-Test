function solution(fees, records) {
    const answer = [];
    
    // records 같은 차량번호 기록끼리 묶어서 2차원 배열에 저장
    const recordsObj = {};
    for(let i = 0; i < records.length; i++) {
        let [time, carNum] = records[i].split(' ');
        const [hour, minute] = time.split(':');
        time = (hour*60) + +minute;
        
        if(!recordsObj[carNum]) {
            recordsObj[carNum] = [];
        }
        
        recordsObj[carNum].push(time);
    }

    // 차번호 작은 순서
    const sortedCars = Object.keys(recordsObj).sort();

    sortedCars.forEach(carNum => {
        const timeArr = recordsObj[carNum];
        
        // 출차 시간 없는 경우 23:59 출차 간주
        if(timeArr.length % 2) {
            timeArr.push(23*60+59)
        }
        
        // 누적 주차시간(분) 계산
        let allTime = 0;
        for(let i = 0; i < timeArr.length; i+=2){
            allTime += (timeArr[i+1] - timeArr[i]);
        }
        
        // 주차요금 계산
        if(allTime <= fees[0]) {
            answer.push(fees[1]);
        }else {
            answer.push(Math.ceil((allTime-fees[0])/fees[2]) * fees[3] + fees[1]);
        }
    })
    
    return answer;
}