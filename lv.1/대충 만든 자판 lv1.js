function solution(keymap, targets) {
    let answer = [];
    let min;
    let sum;
    
    for(let i=0;i<targets.length;i++){
        sum=0;
        let impossible = false;
        let arr=targets[i].split("");
        
        for(let j=0;j<arr.length;j++){
            min=Infinity;
            for(let k=0;k<keymap.length;k++){
                let A=keymap[k].indexOf(arr[j]);
                if(A<min&&A!==-1){
                    min=A;
                }
            }
            if(min==Infinity){
                impossible=true;
                break;
            }
            else{
                sum+=(min+1);
            }
        }
        answer[i]=impossible ? -1 : sum;
    }
    return answer;
}
