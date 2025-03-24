function solution(wallpaper) {
    let answer = [];
    let [top,bottom,left,right]=[100,0,100,0];
    for(let i=0;i<wallpaper.length;i++){
        for(let j=0;j<wallpaper[0].length;j++){
            if(wallpaper[i][j]=="."){
                continue;
            }
            else{
                top=Math.min(top,i);
                bottom=Math.max(bottom,i);
                left=Math.min(left,j);
                right=Math.max(right,j);
            }
        }
    }
    answer=[top, left, bottom+1, right+1];
    return answer;
}
