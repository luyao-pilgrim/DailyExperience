function findMaxSum(arr) {
  let incl = 0; // 包含当前元素的最大和
  let excl = 0; // 不包含当前元素的最大和

  for (let i = 0; i < arr.length; i++) {
    const temp = incl;
    incl = Math.max(excl + arr[i], incl);
    excl = temp;
  }

  return Math.max(incl, excl);
}

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const maxSum = findMaxSum(array);
console.log(maxSum); // 输出结果为 14
