/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSymmetric = function(root) {
    const dfs = (l, r) => {
        if(!l && !r) return true
        if(!l || !r || l.val !== r.val) return false
        return dfs(l.left, r.right) && dfs(l.right, r.left)
    }

    if(!root) return true
    return dfs(root.left, root.right)
};