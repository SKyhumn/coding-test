function solution(arr, queries) {
    var answer = [];
    
    for(let i=0;i<queries.length;i++){
        let s=queries[i][0];
        let e=queries[i][1];
        let k=queries[i][2];
        let min=1000000000;
        
        for(let j=s;j<=k;j++){
            if(arr[j]>k&&arr[j]<min){
                min=arr[j];
            }
        }
        answer.push(min==1000000000?-1:min);
    }
    return answer;
}
