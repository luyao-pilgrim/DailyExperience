
/**
 * @param {number[]} nums
 * @return {number[][]}
 * void backtracking(参数) {
    if (终止条件) {
        存放结果;
        return;
    }

    for (选择：本层集合中元素（树中节点孩子的数量就是集合的大小）) {
        处理节点;
        backtracking(路径，选择列表); // 递归
        回溯，撤销处理结果
    }
}
 */
 var permute = function(nums) {
    const res = [], path = [];
    backtracking(nums, nums.length, []);
    return res;
    
    function backtracking(n, k, used) {
        if(path.length === k) {
            res.push(Array.from(path));
            return;
        }
        for (let i = 0; i < k; i++ ) {
            if(used[i]) continue;
            path.push(n[i]);
            used[i] = true; // 同支
            backtracking(n, k, used);
            path.pop();
            used[i] = false;
        }
    }
};

const s = (arr) => {
    let res = [], path = []
    backtracking(arr, arr.length, [])
    return res

    function backtracking(n, l, used) {
        if(path.length === l) {
            res.push(Array.from(path))
            return
        }

        for(let i = 0; i < l; i++) {
            if(used[i]) continue
            path.push(n[i])
            used[i] = true
            backtracking(n, l, used)
            path.pop()
            used[i] = false
        }
    }
}