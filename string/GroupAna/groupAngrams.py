class Solution:
    def groupAnagrams(self, strs):
        maps = {}
        result = []
        for s in strs:
            key = ''.join(sorted(s))
            if key in maps:
                maps.get(key).append(s)
            else:
                maps[key] = [s]
        for i in maps:
            result.append(maps[i])
        # return maps.values()
        return result



                 
