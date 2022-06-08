/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var exchange1 = function(nums) {
    let res1 = nums.filter(e => e % 2 === 1);
    let res2 = nums.filter(e => e % 2 === 0);
    let res = [...res1,...res2];
    return res;
};

/**双指针

定义两个指针，分别指向数组左右边缘。

查看左指针所指向的元素。
若为 奇数，则左指针往右移动。
若为 偶数，则与右指针交换元素，并将右指针往左移动。
重复该过程，直到左指针超过右指针。 */

var exchange2 = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let c = nums[left];
        nums[left] = nums[right];
        nums[right] = c;
        while (nums[left] % 2) {
            left++;
        }
        while (nums[right] % 2 === 0) {
            right--;
        }
    }
    return nums;
};