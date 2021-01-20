var isSymmetric = function(root) {
    return checkChildSymmetry(root, root)  
};

var checkChildSymmetry = function(left, right) {
  if (left === null && right === null) {
      return true;
  } else if (left === null || right === null) {
      return false;
  }
  return (left.val === right.val)
    && checkChildSymmetry(left.right, right.left)
    && checkChildSymmetry(right.left, left.right)
}
