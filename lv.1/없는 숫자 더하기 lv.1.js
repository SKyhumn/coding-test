function solution(numbers) {
    let answer=45-numbers.reduce((acc,curr)=>acc+curr,0);
    return answer;
}
