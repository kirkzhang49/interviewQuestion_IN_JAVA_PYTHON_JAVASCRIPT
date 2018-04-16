/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var map = {}
    var result = []
    for (var i=0; i<strs.length; i++){
        var key = strs[i].split('').sort();
        if(map[key]===undefined){
            map[key] = []
            map[key].push(strs[i])
        }else{
            map[key].push(strs[i])
        }
    }
    for(var i in map){
        result.push(map[i]);
    }
    return result
};
