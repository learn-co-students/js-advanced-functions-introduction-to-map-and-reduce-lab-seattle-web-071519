function mapToNegativize(sourceArray){
    let array = []
    for (let i = 0; i < sourceArray.length; i++){
        array.push(sourceArray[i] * -1)
    }   
    return array 
}

function mapToNoChange(sourceArray){
    return sourceArray   
}

function mapToDouble(sourceArray){
    let array = []
    for (let i = 0; i < sourceArray.length; i++){
        array.push(sourceArray[i] * 2)
    }   
    return array     
}

function mapToSquare(sourceArray){
    let array = []
    for (let i = 0; i < sourceArray.length; i++){
        array.push(sourceArray[i] * sourceArray[i])
    }   
    return array     
}

function reduceToTotal(sourceArray, startingPoint=0){
    let total = startingPoint
    for (let i = 0; i < sourceArray.length; i++){
        total += sourceArray[i]
    }   

    return total
}
function reduceToAllTrue(sourceArray){
    let allTrue = true
    for (let i = 0; i < sourceArray.length; i++){
        if (!sourceArray[i]){
            allTrue = false
        }
    }   

    return allTrue
}
function reduceToAnyTrue(sourceArray){
    for (let i = 0; i < sourceArray.length; i++){
        if (sourceArray[i]){
            return true
        }
    }   
    return false
}