function solution(n, control) {
    var answer = 0;
    let spctrl=control.split('');
    for(let i=0;i<spctrl.length;i++){
        if(spctrl[i]=="w"){
            n+=1;
        }
        else if(spctrl[i]=="s"){
            n-=1;
        }
        else if(spctrl[i]=="d"){
            n+=10;
        }
        else if(spctrl[i]="a"){
            n-=10;
        }
    }
    return answer=n;
}
