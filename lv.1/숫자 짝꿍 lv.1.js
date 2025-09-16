function solution(X, Y) {
    let countX = Array(10).fill(0);
    let countY = Array(10).fill(0);

    for (let ch of X) countX[ch]++;
    for (let ch of Y) countY[ch]++;

    let result = [];

    for (let i = 9; i >= 0; i--) {
        let common = Math.min(countX[i], countY[i]);
        result.push(String(i).repeat(common));
    }

    let answer = result.join("");

    if (answer === "") return "-1";
    if (answer[0] === "0") return "0";
    return answer;
}
