// Trapping Rain Water
// https://leetcode.com/problems/trapping-rain-water/description/

var trap = function(height) {
    // scan left max
    // scan right max
    // e.g. heights:  0 3 2 1 5 1
    // left max:      0 0 3 3 3 5
    // right max:     5 5 5 5 1 0
    // what that means is?
    // for index 1 -> height 3
    // 0 is its left max, 5 is its right max -> that gives zero volumn as it cannot hold water
    // for index 2 -> height 2
    // 3 is its left max and 5 is its right max -> min(3,5) = 3 and height 2 is the bottom of the water bed, so that gives (3-2) -> 1 volumn of water
    
    var leftMax = [];
    var rightMax=  [];
    var water = 0;
    
    // to get the left of i so we do i - 1
    for(var i = 1; i < height.length; i++) {
       
        leftMax[i] = Math.max(leftMax[i - 1] || 0, height[i - 1]);
    }
    
    for(i = height.length - 2; i >= 0; i--) {
        
        rightMax[i] = Math.max(rightMax[i + 1] || 0, height[i + 1]);
        
        var minHeight = Math.min(leftMax[i], rightMax[i]);
        var waterBottom = height[i];
        if(minHeight > waterBottom) {
            water += (minHeight - waterBottom);    
        }
    }
    
    return water;
};