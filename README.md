# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

The runtime of the algoithm would be $O(nlogn)$ becuase the number of times you have
to go through the recursive call is based on how large n is.
When the array is aplit with a.slice(0, b) b is n/3 so when you recurrisively call the array it will split into thirds each call until the size is 2 or 1 when its 2 then it splits the array in half and when the size is 1 it returns the value. So since it only has to process 1/3 of the array each recursive call its $O(logbase3n)$. Since it still has to add all the numbers together the time to process is still n so if you add the two together its $O(nlogn)$ for run time.

help recieved googled questions about how to do what i wanted to in java
https://www.w3schools.com/jsref/jsref_slice_array.asp
"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."
