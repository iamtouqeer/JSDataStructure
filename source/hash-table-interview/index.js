function itemInCommon(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        console.log('yahan.... i', i)
        for (let j = 0; j < arr2.length; j++) {
            console.log('yahan.... j', j)
            if (arr1[i] === arr2[j]) {

                return true
            }
        }
    }
    return false
}


let array1 = [1, 2, 5], array2 = [3, 4, 5]
console.log(itemInCommon(array1, array2));


