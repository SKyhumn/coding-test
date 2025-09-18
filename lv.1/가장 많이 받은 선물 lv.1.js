function solution(friends, gifts) {
  const n = friends.length;
  const idx = new Map();
  friends.forEach((f, i) => idx.set(f, i));
    
  const send = Array.from({ length: n }, () => Array(n).fill(0));
  const given = Array(n).fill(0);
  const taken = Array(n).fill(0);

  for (const g of gifts) {
    const [a, b] = g.split(" ");
    const ai = idx.get(a);
    const bi = idx.get(b);
    send[ai][bi] += 1;
    given[ai] += 1;
    taken[bi] += 1;
  }

  const giftIndex = friends.map((_, i) => given[i] - taken[i]);

  const received = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (send[i][j] > send[j][i]) {
        received[i]++;
      } else if (send[i][j] < send[j][i]) {
        received[j]++;
      } else {
        if (giftIndex[i] > giftIndex[j]) {
          received[i]++;
        } else if (giftIndex[i] < giftIndex[j]) {
          received[j]++;
        }
      }
    }
  }

  return Math.max(...received);
}
