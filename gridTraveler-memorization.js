/**
 * Say that you are a traveler on a 2D grid. You begin in the top-left corner and your goal is to travel to the bottom-right corner. You may only move down or right.
 * 
 * In how many ways can you travel to the goal on a grid with dimensions m * n?
 * Write a function `gridTraveler(m, n)` taht calculates this.
 */

/**
 * 
 * Similar to Fibonacci series, for example, (m, n) = (2, 3), it looks like: 
 * =========================
 * | (2,3) | (2,2) | (2,1) |
 * =========================
 * | (1,3) | (1,2) | (1,1) |
 * =========================
 * 
 * If one of arguments has turned to "0", i.e. (0, N) or (N, 0), that means the route has in to the end; 
 * otherwise, keep going until two arguments are (1,1), we marked as (FIND).
 * (2,3) -> go right -> (2,2) -> go right -> (2,1) -> go right -> (2,0)
 *                                                 -> go down  -> (1,1)(FIND)
 *                            -> go down  -> (1,2) -> go right -> (1,1)(FIND)
 *                                                 -> go down  -> (0,2)
 *       -> go down  -> (1,3) -> go right -> (1,2) -> go right -> (1,1)(FIND)
 *                                                 -> go down  -> (0,2)
 *                            -> go down  -> (0,3)
 * so gridTraveler(2,3) = 3(FIND).
 * 
 * 
 * Without memorization:
 * In order to reach (1,1), we first spend n and m steps to get there. So it will be n+m levels, implies the time complexity is O(2^(n+m)); space complexity is O(n+m).
 * 
 * With memorization:
 * for example, n: {0, 1, 2}, m: {0, 1, 2, 3}, it will be n * m times.
 * - time complexity: O(n*m)
 * - space complexity: O(n+m)
 */

/** 
 * Tips
 * 1. Make it work.
 *  - visualize the problem as a tree
 *  - implement the tree using recursion
 *  - test it
 * 
 * 2. Make it efficient.
 *  - add a memo object
 *  - add a base case to return memo values
 *  - store return values into the memo
 */

const gridTraveler = (m, n) => {
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    return gridTraveler(m-1, n) + gridTraveler(m, n-1);
}

console.log(gridTraveler(1, 1))
console.log(gridTraveler(2, 3))
console.log(gridTraveler(0, 5))

const gridTraveler_with_memo = (m, n, memo = {}) => {
    const key = m + ',' + n;
    if (key in memo) return memo[key];
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    memo[key] = gridTraveler_with_memo(m-1, n, memo) + gridTraveler_with_memo(m, n-1, memo);
    return memo[key];
}

console.log(gridTraveler_with_memo(18, 18));