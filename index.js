// Your code here

function mapToNegativize(sourceArray) {
    let negArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        negArray.push(sourceArray[i] * -1)
    }
    return negArray
}

function mapToNoChange(sourceArray) {
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i])
    }
    return newArray
}

function mapToDouble(sourceArray) {
    let dubArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        dubArray.push(sourceArray[i] * 2)
    }
    return dubArray
}

function mapToSquare(sourceArray) {
    let sqrArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        sqrArray.push(sourceArray[i] ** 2)
    }
    return sqrArray
}

function reduceToTotal(sourceArray, startingPoint=0) {
    let sum = startingPoint;
    for (let i = 0; i < sourceArray.length; i++) {
        sum += sourceArray[i]
    }
    return sum
}

function reduceToAllTrue(sourceArray) {
    // let sum = startingPoint;
    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) {
            return false
        }
    }
    return true
}


function reduceToAnyTrue(sourceArray) {
    // let sum = startingPoint;
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) {
            return true
        }
    }
    return false
}