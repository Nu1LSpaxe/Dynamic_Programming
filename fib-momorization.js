/**
 * Write a function `fib(n)` that takes in a number as an argument. 
 * The function should return the n-th number of the Fibonacci sequence.
 * 
 * The 1st and 2nd number of the sequence is 1.
 * To generate the next number of the sequence, we sum the previous two.
 */
/**
 * Fibonacci series (Binary Tree)
 * 0 + 1 = 1                      (i = 0, 1, 2)
 *     1 + 1 = 2                  (i = 3)
 *         1 + 2 = 3              (i = 4)
 *             2 + 3 = 5          (i = 5)
 *                 3 + 5 = 8      (i = 6)
 *                     5 + 8 = 13 (i = 7)
 * 
 * 
 * Without memorization:
 * - height: n
 * - width: 1 * 2 * 2 * 2 ... = 2^(n-1)
 * - time complexity(height*width) ~ O(2^n)
 * - space complexity ~ O(n)
 * 
 * With memorization:
 * - height: n
 * - width: 1, 2, 2, 2, ...
 * - time complexity(height*width) ~ O(2n), which is O(n) approximately
 * - space complexity ~ O(n)
 */

const fib = (n) => {
    return n<=2 ? 1 : fib(n-1) + fib(n-2);
}

console.log(fib(6));
console.log(fib(2));

const fib_with_memo = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fib_with_memo(n - 1, memo) + fib_with_memo(n - 2, memo);
    return memo[n];
}

console.log(fib_with_memo(50));
