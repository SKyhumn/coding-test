function solution(n, w, num) {
  if (n - num <= w) return 1;
    
  let res = 0;
    
  const c1 = Math.ceil(n / w);
  const c2 = Math.ceil(num / w);

  let r1 = n % w;
  let r2 = num % w;
    
  res = c1 - c2;
  if (c1 % 2 === c2 % 2) {
    if (r1 >= r2) res++;
  } else {
    if (!r1) r1 = w;
    if (!r2) r2 = w;
    if (r1 + r2 >= w) res++; 
  }
  
    
  return res;
}
