function partitionLabels(s) {
  const last = new Array(26);
  for (let i = 0; i < s.length; i++) {
    last[s.charCodeAt(i) - "a".charCodeAt(0)] = i;
  }
  let anchor = 0;
  let j = 0;
  const result = [];
  for (let i = 0; i < s.length; i++) {
    j = Math.max(j, last[s.charCodeAt(i) - "a".charCodeAt(0)]);
    if (i === j) {
      result.push(i - anchor + 1);
      anchor = i + 1;
    }
  }
  return result;
}
