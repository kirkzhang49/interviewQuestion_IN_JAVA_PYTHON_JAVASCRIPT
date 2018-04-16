/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = {};
    for (var i=0;i<nums.length;i++){
        if(map[nums[i]]!==undefined){
            return [map[nums[i]],i];//return i and stored index
        }else{
            //store index
            map[target-nums[i]] =i;//if another half which add to target found return
        }
    }
};
