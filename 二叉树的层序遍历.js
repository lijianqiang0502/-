/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    var queue = [root];
    var res = []
    while(queue.length){
        let tmp = [];
        let next = [];
        for(let i = 0 ; i < queue.length ;i++){
            tmp.push(queue[i].val);
            queue[i].left && next.push(queue[i].left);
            queue[i].right && next.push(queue[i].right);
        }
        res.push(tmp);
        queue = next;
    }
    return res;
};
