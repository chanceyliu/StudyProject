### 题目

```
给你一个字符串 S、一个字符串 T 。请你设计一种算法，可以在 O(n) 的时间复杂度内，从字符串 S 里面找出：包含 T 所有字符的最小子串。



示例：

输入：S = "ADOBECODEBANC", T = "ABC"
输出："BANC"


提示：

如果 S 中不存这样的子串，则返回空字符串 ""。
如果 S 中存在这样的子串，我们保证它是唯一的答案。

```

### 思路

（此处撰写思路）

### 代码

```typescript
function minWindow(s: string, t: string): string {
  let l = 0;
  let r = 0;
  const need = new Map();
  for (let c of t) {
    need.set(c, need.has(c) ? need.get(c) + 1 : 1);
  }

  let needType = need.size;
  let res = "";
  while (r < s.length) {
    let c = s[r];
    if (need.has(c)) {
      need.set(c, need.get(c) - 1);
      if (need.get(c) === 0) needType -= 1;
    }

    while (needType === 0) {
      const newRes = s.substring(l, r + 1);
      if (!res || newRes.length < res.length) res = newRes;

      const c2 = s[l];
      if (need.has(c2)) {
        need.set(c2, need.get(c2) + 1);
        if (need.get(c2) === 1) needType += 1;
      }
      l += 1;
    }
    r += 1;
  }
  return res;
}
```

**复杂度分析**

- 时间复杂度：O(nlogn)
- 空间复杂度：O(n)
