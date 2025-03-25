function solution(s) {
    var answer = [-1];
    let count;
    let x;
    for(let i=1;i<s.length;i++){
        count=0;
        x=0;
        for(let j=i-1;j>=0;j--){
            count++;
            if(s[j]===s[i]){
                x=count;
                break;
            }
        }
        if(x!==0){
            answer.push(x);
        }
        else{
            answer.push(-1);
        }
    }
    return answer;
}
