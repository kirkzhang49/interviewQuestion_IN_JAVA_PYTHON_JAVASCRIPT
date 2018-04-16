class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        if(strs==null) return null;
        HashMap<String,List<String>> map = new HashMap<>();
        for (int i=0;i<strs.length;i++){
            char [] key = strs[i].toCharArray();
            Arrays.sort(key);
            String KeyValue = String.valueOf(key);
            if(!map.containsKey(KeyValue)){
                map.put(KeyValue,new ArrayList<>());

            }
                map.get(KeyValue).add(strs[i]);
        }
        return new ArrayList<>(map.values());
     }
}
