function zigzagLevelOrder(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  let zigzag = false;
  while (queue.length) {
    const levelSize = queue.length;
    const currentLevel = [];
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      if (zigzag) currentLevel.unshift(node.val);
      else currentLevel.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(currentLevel);
    zigzag = !zigzag;
  }
  return result;
}
