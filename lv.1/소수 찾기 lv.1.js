function solution(n) {
    let count = 1;
    if (n === 2) return count;
    else {
        for (let i = 3; i <= n; i += 2) {
            let temp = 0;
            for (let j = 3; j <= Math.floor(Math.sqrt(i)); j += 2) {
                if (i % j === 0) {
                    temp++;
                    break;
                }
            }
            if (temp === 0) count++;
        }
        return count;
    }
}
