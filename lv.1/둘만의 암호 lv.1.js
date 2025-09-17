function solution(s, skip, index) {
    let answer = '';
    let arr=[];
    let ch;
    let count;
    let skipSet=new Set(skip);
    
    for(let i=0;i<s.length;i++){
        ch=s.charCodeAt(i);
        count=0;
        while(count<index){
            ch++;
            if(ch>122){
                ch=97;
            }
            if(skipSet.has(String.fromCharCode(ch))){
                continue;
            }
            count++;
        }
        arr[i]=String.fromCharCode(ch);
    }
    answer=arr.join('');
    return answer;
}
