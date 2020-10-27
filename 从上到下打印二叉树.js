/**
 *
 * @introduce
 * 二叉树的层序遍历（BFS解法）
 * @author
 * Seven
 * @param
 * * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * @version
 * 1.0.0
 *
 */

const inorderTraversal = function(root) {
    const res = [];
    const queue = [root];
    while(queue.length){
        const first = queue.shift();
        res.push(first.val);
        first.left && queue.push(first.left);
        first.right && queue.push(first.right);
    }
    return res;
};
