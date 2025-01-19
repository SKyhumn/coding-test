function solution(num_list) {
    var answer = 0;
    let a=1,b=0;
    for(let i=0;i<num_list.length;i++){
        a*=num_list[i];
        b+=num_list[i];
    }
    b=b**2;
    if(a<b){
        answer=1;
    }
    else{
        answer=0;
    }
    return answer;
}
