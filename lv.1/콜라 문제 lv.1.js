function solution(a, b, n) {
    let [sum, remainBottle] = [0, n];

    while (remainBottle >= a) {
        let remainder = remainBottle % a;
        let increasedBottleCount = Math.floor(remainBottle / a) * b;
        sum += increasedBottleCount;
        remainBottle = increasedBottleCount + remainder;
    }
    return sum;
}
