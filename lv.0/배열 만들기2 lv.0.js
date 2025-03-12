function solution(l, r) {
    var answer = [];
    for(let i=l;i<=r;i++){
        if(String(i).indexOf('1')==-1&&String(i).indexOf('2')==-1&&String(i).indexOf('3')==-1&&String(i).indexOf('4')==-1&&String(i).indexOf('6')==-1&&String(i).indexOf('7')==-1&&String(i).indexOf('8')==-1&&String(i).indexOf('9')==-1){
            answer.push(i);
        }
    }
    if(answer.length==0){
        answer.push(-1);
    }
    return answer;
}
