// 2. Count word occurrences in array
       // Input:
       // ["apple", "banana", "apple", "orange", "banana", "apple"]
        
       //Output:
       //{ apple: 3, banana: 2, orange: 1 }

const arr = ["apple", "banana", "apple", "orange", "banana", "apple"]
const result = {}

for(let word of arr){
    if (result[word]){
        result[word]++;
    }
    else{
        result[word] = 1;
    }
}

console.log(result);