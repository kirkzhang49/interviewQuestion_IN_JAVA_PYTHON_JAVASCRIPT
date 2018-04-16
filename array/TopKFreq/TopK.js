/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    map = {};
    nums.forEach(function(num){//anamous callback
        if(!map[num]) map[num] = 1;
        else map[num]++;
    });
    var temp = [];
    for (var m in map){ //loop through all keys
        temp.push({key:m,value:map[m]});
        console.log(m);
    }
    temp.sort(function(x,y){
        return y.value-x.value //customer reverse sort
    })
    var result = [];
    for (var i =0;i<k;i++){
        result.push(+temp[i].key);  // key value pairs all K keys for most frequent + for cast to int
    }
    return result;
};
