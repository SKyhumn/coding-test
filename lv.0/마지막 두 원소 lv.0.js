function solution(num_list) {
    var answer = [];
    if((num_list[num_list.length-1])>(num_list[num_list.length-2])){
        num_list[num_list.length]=num_list[num_list.length-1]-num_list[num_list.length-2];
    }
    else{
        num_list[num_list.length]=num_list[num_list.length-1]*2;
    }
    
    for(let i=0;i<num_list.length;i++){
        answer[i]=num_list[i];
    }
    return answer;
}
