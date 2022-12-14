/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    return [...new Set(nums1.filter((it)=>nums2.includes(it)))]
};
