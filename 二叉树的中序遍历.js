/**
 *
 * @introduce
 * 二叉树的中序遍历（递归解法）
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
    const inorder = (node) => {
        if(!node) return;
        inorder(node.left);
        res.push(node.val);
        inorder(node.right);
    }
    inorder(root);
    return res;
};
