### 题目

```
你现在手里有一份大小为 N x N 的 网格 grid，上面的每个 单元格 都用 0 和 1 标记好了。
其中 0 代表海洋，1 代表陆地，请你找出一个海洋单元格，
这个海洋单元格到离它最近的陆地单元格的距离是最大的。

我们这里说的距离是「曼哈顿距离」（ Manhattan Distance）：
(x0, y0) 和 (x1, y1) 这两个单元格之间的距离是 |x0 - x1| + |y0 - y1| 。

如果网格上只有陆地或者海洋，请返回 -1。



示例 1：
```

![image](https://p.ipic.vip/mmk1kt.png)

```


输入：[[1,0,1],[0,0,0],[1,0,1]]
输出：2
解释：
海洋单元格 (1, 1) 和所有陆地单元格之间的距离都达到最大，最大距离为 2。
示例 2：

```

![image](https://p.ipic.vip/4qlqlt.png)

```

输入：[[1,0,0],[0,0,0],[0,0,0]]
输出：4
解释：
海洋单元格 (2, 2) 和所有陆地单元格之间的距离都达到最大，最大距离为 4。


提示：

1 <= grid.length == grid[0].length <= 100
grid[i][j] 不是 0 就是 1

```

### 思路

（此处撰写思路）

### 代码

```typescript
function maxDistance(grid: number[][]): number {
  if (grid.length < 2) return -1;
  let n = grid.length;
  // 创建 dp 状态矩阵
  let dp = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(n);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      dp[i][j] = grid[i][j] ? 0 : Infinity;
    }
  }
  // 从左上向右下遍历
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j]) continue;
      if (i - 1 >= 0) dp[i][j] = Math.min(dp[i][j], dp[i - 1][j] + 1);
      if (j - 1 >= 0) dp[i][j] = Math.min(dp[i][j], dp[i][j - 1] + 1);
    }
  }
  // 从右下向左上遍历
  for (let i = n - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (grid[i][j]) continue;
      if (i + 1 < n) dp[i][j] = Math.min(dp[i][j], dp[i + 1][j] + 1);
      if (j + 1 < n) dp[i][j] = Math.min(dp[i][j], dp[i][j + 1] + 1);
    }
  }
  let ans = -1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!grid[i][j]) ans = Math.max(ans, dp[i][j]);
    }
  }
  if (ans === Infinity) {
    return -1;
  } else {
    return ans;
  }
}
```

**复杂度分析**

- 时间复杂度：O(max(n,log k)) 其中 N 为数组长度
- 空间复杂度：O(1)
