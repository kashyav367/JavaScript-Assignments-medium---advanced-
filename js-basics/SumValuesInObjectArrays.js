// 1. Sum values in object arrays**
//     - Input:
        
//     { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }

//     - Output

//     { food: 60, travel: 20, bills: 100 }

const data = {
    food : [10,20,30],
    travel : [5,15],
    bills : [40,60]
}

const result = {}

for(let key in data){
    result[key] = data[key].reduce((sum,val) => sum + val,0 )
}

console.log(result)