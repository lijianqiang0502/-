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
    var q = [root, root], n, m
    while (q.length) {
        n = q.shift(), m = q.shift()
        if (!m && !n) continue
        if (!m || !n || m.val !== n.val) return false
        q.push(n.left, m.right, n.right, m.left)
    }
    return true
};

//利用队列比较两边的二叉树的左右子树
