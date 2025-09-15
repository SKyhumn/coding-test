function solution(food) {
    let answer = '';
    for(let i=1;i<food.length;i++){
        if(Math.floor(food[i]%2)!==0){
            for(let j=0;j<Math.floor((food[i]-1)/2);j++){
                answer+=i;
            }
        }
        else if(Math.floor(food[i]%2)===0){
            for(let j=0;j<Math.floor(food[i]/2);j++){
                answer+=i;
            }
        }
    }
    answer+=0;
    for(let i=food.length-1;i>0;i--){
        if(Math.floor(food[i]%2)!==0){
            for(let j=0;j<Math.floor((food[i]-1)/2);j++){
                answer+=i;
            }
        }
        else if(Math.floor(food[i]%2)===0){
            for(let j=0;j<Math.floor(food[i]/2);j++){
                answer+=i;
            }
        }
    }
    return answer;
}
