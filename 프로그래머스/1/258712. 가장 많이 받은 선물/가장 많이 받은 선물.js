function solution(friends, gifts) {
    // 주고 받은 선물 기록
    const giveTakeArr = friends.map(() => Array(friends.length).fill(0));
    
    // 선물 지수 계산을 위한 주고 받은 선물 합산
    const giftCountObj = friends.reduce((acc, cur) => {
        acc[cur] = [0, 0, 0];
        return acc;
    }, {});
    
    gifts.forEach(gift => {
        const friendArr = gift.split(" ");
    
        giveTakeArr[friends.indexOf(friendArr[0])][friends.indexOf(friendArr[1])] += 1;
        
        giftCountObj[`${friendArr[0]}`][0] += 1;
        giftCountObj[`${friendArr[1]}`][1] += 1;
    });
    
    for (const giveFriendIdx in friends) {
        for(let takeFriendIdx = 0; takeFriendIdx < friends.length; takeFriendIdx++){
            if (giveFriendIdx !== takeFriendIdx){
                // 선물을 주고받은 기록이 있을 경우: 더 많은 선물을 준 사람이 선물을 받음
                 if(giveTakeArr[giveFriendIdx][takeFriendIdx] > giveTakeArr[takeFriendIdx][giveFriendIdx]) {
                     giftCountObj[`${friends[giveFriendIdx]}`][2] += 1;
                     
                // 선물을 주고받은 기록이 없거나, 주고받은 수가 같은 경우
                 }else if(giveTakeArr[giveFriendIdx][takeFriendIdx] === giveTakeArr[takeFriendIdx][giveFriendIdx]) {
                     // 선물 지수
                     const giftCount1 = giftCountObj[`${friends[giveFriendIdx]}`][0] - giftCountObj[`${friends[giveFriendIdx]}`][1];
                     const giftCount2 = giftCountObj[`${friends[takeFriendIdx]}`][0] - giftCountObj[`${friends[takeFriendIdx]}`][1];
                     
                     // 선물 지수가 큰 사람이 선물을 받음
                     if(giftCount1 > giftCount2) {
                         giftCountObj[`${friends[giveFriendIdx]}`][2] += 1;
                     }
                 }
            }
        }
    }
    
    // 다음 달에 받을 선물 수
    const takeGiftsCount = Object.values(giftCountObj).map(arr => arr[arr.length -1]);
    
    // 가장 선물을 많이 받을 사람의 선물 수
    return Math.max(...takeGiftsCount);
}