function solution(ingredient) {
    var answer = 0;
    let arr=[];
    
    for(let i=0;i<ingredient.length;i++){
        arr.push(ingredient[i]);
        
        if(arr.length>=4){
            let a=arr.slice(-4).join('');
            if(a=='1231'){
                arr.splice(-4);
                answer++;
            }
        }
    }
    
    return answer;
}
