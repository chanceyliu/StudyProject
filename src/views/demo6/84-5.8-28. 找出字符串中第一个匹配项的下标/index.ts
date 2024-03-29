function strStr(haystack: string, needle: string): number {
  const n = haystack.length;
  const m = needle.length;
  for (let i = 0; i + m <= n; i++) {
    let flag = true;
    for (let j = 0; j < m; j++) {
      if (haystack[i + j] != needle[j]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      return i;
    }
  }
  return -1;
}
