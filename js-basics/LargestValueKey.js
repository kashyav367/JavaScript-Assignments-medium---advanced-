 // 4. Find the largest value key**
    // - Input:
    //     { a: 10, b: 50, c: 20 }

        
    // - Output: b

    let data = {
        a : 10,
        b : 50,
        c : 20
    }

    //we have to compare prevKey and currentKey

    let maxKey = Object.keys(data).reduce((prevKey , currentKey) => {
    return data[currentKey] > data[prevKey] ? currentKey : prevKey
    }, Object.keys(data)[0])

    console.log(maxKey)
