function solution(a, b, n) {
    let answer = 0;
    while(n>=a){
        const newBottle=Math.floor(n/a*b);
        answer+=newBottle;
        n=newBottle+(n%a);
    }
    return answer;
}
