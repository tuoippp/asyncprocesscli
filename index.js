function canFinish(numCourses, prerequisites) {
  const graph = new Array(numCourses).fill(0).map(() => []);
  const inDegree = new Array(numCourses).fill(0);
  for (const [course, pre] of prerequisites) {
    graph[pre].push(course);
    inDegree[course]++;
  }
  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }
  let count = 0;
  while (queue.length) {
    const course = queue.shift();
    count++;
    for (const nextCourse of graph[course]) {
      inDegree[nextCourse]--;
      if (inDegree[nextCourse] === 0) queue.push(nextCourse);
    }
  }
  return count === numCourses;
}
