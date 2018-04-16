class Solution {
    public List<Integer> topKFrequent(int[] nums, int k) {
        HashMap<Integer,Integer> map = new HashMap<>();
        for(int i:nums){
            map.put(i,map.getOrDefault(i,0)+1);
        }
        PriorityQueue<Map.Entry<Integer,Integer>> maxHeap = new PriorityQueue<>((a,b)->b.getValue()-a.getValue());
        for (Map.Entry<Integer,Integer> entry:map.entrySet()){
            maxHeap.add(entry);
        }
        List<Integer> result = new ArrayList<>();
        while(result.size()<k){
            result.add(maxHeap.poll().getKey());
        }
        return result;
    }
}
