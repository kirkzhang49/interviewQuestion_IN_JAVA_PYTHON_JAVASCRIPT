
class Solution:
    def topKFrequent(self, nums, k):
        record = {}
        for i in nums:
            if i in record:
                record[i] +=1
            else:
                record[i] = 1
        Srecord = sorted(record.items(),key = operator.itemgetter(1),reverse=True)# sort by second in pairs
        result = []
        for key,value in Srecord: #append all to result
            result.append(key)
        return result[:k]
