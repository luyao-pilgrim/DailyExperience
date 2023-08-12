
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
            res.push([...path]);
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

//看我！
//数组排列重点：path装路径,used装这个地方是否被使用
// backtracking用到的参数：原生数组，需要的长度，used数组

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

const fang = (arr) => {
    let res = [], path = []
    backtracking(arr, arr.length, [])
    return res

    function backtracking(n,l,used) {
        if(path.length === l) {
            res.push([...path])
            return
        }

        for(let i = 0; i < l; i++) {
            if(used[i]) continue
            path.push(arr[i])
            used[i] = true
            backtracking(n, l, used)
            path.pop()
            used[i] = false
        }
    }
}



const xhs = (arr) => {

    let res = 0, path = []
    backtracking(arr, arr.length, [])
    return res

    function backtracking(o, p, used) {
        let tmpT = 0
        let tmpH = 0
        let tmpHappy = 0
        for(let j = 0; j < path.length; j++) {
           tmpT += path[j][0]
           tmpH += path[j][1]
          tmpHappy += path[j][2]
          
        }
        if(tmpT > 5 || tmpH > 4) {
          return
        }else {
          res = Math.max(res, tmpHappy)
        }
        
        for(let k = 0; k < p; k++) {
          if(used[k]) continue;
          path.push(o[k]);
          used[k] = true; // 同支
          backtracking(o, p, used);
          path.pop();
          used[k] = false;
          
        }
      }
}

console.log(xhs([[1,2,2],[2,1,3],[4,1,1],[1,1,1]]))
