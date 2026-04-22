// 3. Swap keys and values of object**
    // - Input:
    //     { a: "x", b: "y", c: "z" }
        
    // - Output:
    // { x: "a", y: "b", z: "c" }

    const data = {
        a : "x",
        b : "y",
        c : "z"
    }

    const result = {}

    for(let key in data){
        let value = data[key]
        result[value] = key;
    }
    console.log(result)