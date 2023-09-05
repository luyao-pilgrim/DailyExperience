function getEvenNumberString(n) {
  let evenString = ""; // 初始化一个空字符串来存储偶数字符串
  let num = 0; // 初始化偶数起始数字为0

  while (evenString.length < n) {
    // 当偶数字符串的长度小于所需的位置n时
    const numString = num.toString(); // 将当前偶数数字转换为字符串
    evenString += numString; // 将当前偶数数字的字符串连接到偶数字符串上
    num += 2; // 增加2，以获得下一个偶数数字
  }

  return evenString[n - 1]; // 返回在位置n上的数字
}
