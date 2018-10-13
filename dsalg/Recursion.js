// Recursion - HackerRank

// https://www.hackerrank.com/challenges/30-recursion/problem

// Write a factorial function that takes a positive integer,  as a parameter and prints the result of  ( factorial).



function factorial(n) {
    
    if(n === 1){
        return 1
    } else {
        return n * factorial(n-1)
    }

}