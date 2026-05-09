//5. Flatten object of arrays into one array**

    // Input: { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }
    // Output: ["apple", "banana", "carrot", "pea"]

    const data = {
        fruits : ["apple","banana"],
        veggies : ["carrot","pea"]
    }

    const result = Object.values(data).flat()
    console.log(result)