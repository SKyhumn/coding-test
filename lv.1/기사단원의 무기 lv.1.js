function solution(number, limit, power) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    let count = 0;
    const sqrt = Math.floor(Math.sqrt(i));

    for (let j = 1; j <= sqrt; j++) {
      if (i % j === 0) {
        if (j * j === i) count += 1;
        else count += 2;             
      }
    }

    if (count > limit) count = power;
    answer += count;
  }

  return answer;
}
