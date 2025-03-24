function solution(name, yearning, photo) {
    let result = [];
    let nameMap={};
    for(let i=0;i<yearning.length;i++){
        nameMap[name[i]]=yearning[i];
    }
    for(let i=0;i<photo.length;i++){
        const person=photo[i];
        let sum=0;
        for(let j=0;j<person.length;j++){
            if(nameMap[person[j]]){
                sum+=nameMap[person[j]];
            }
        }
        result.push(sum);
    }
    return result;
}
