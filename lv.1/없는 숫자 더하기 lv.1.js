function solution(numbers) {
    let answer=0;
    const arr=[0,1,2,3,4,5,6,7,8,9];
    let other=arr.filter(item=>!numbers.includes(item));
    for(let i=0;i<other.length;i++){
        answer+=other[i];
    }
    return answer;
}
