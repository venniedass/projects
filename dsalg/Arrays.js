// Arrays - HackerRank
// Given an array, , of  integers, print 's elements in reverse order as a single line of space-separated numbers.

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    

console.log(arr.reverse().join(" "))

}