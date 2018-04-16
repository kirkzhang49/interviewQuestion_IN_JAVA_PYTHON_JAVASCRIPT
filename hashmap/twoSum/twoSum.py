class Solution(object):
    def twoSum(self, nums, target):
        record = {}
        for i,num in enumerate(nums):
            if target - num in record:
                return [record[target-num],i] # if target - num exist return i and previous another part add to target
            else:
                record[num] = i #index for itself
'''
enumerate will do
for i,num in enumerate(project):
    print(i,num)
    #######
    1 apple
    2 PC
    3 Mobile
    ...
'''
