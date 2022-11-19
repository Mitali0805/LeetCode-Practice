
// const twoSum = (nums, target) => {
//     const sumArr = nums.reduce((acc, curr, index, arr) => {
//         if ((curr + arr[index + 1]) === target) {
//             acc = [];
//             acc.push(index);
//             acc.push(index + 1)
//             return acc;
//         }
//         return acc
//     }, [])

//    return sumArr;
// }

// const value = twoSum([0, 7, 3, 6], 9)
// console.log(value)



const twoSum = (nums, target) => {
    const sumArr = nums.reduce((acc, curr, index, arr) => {
        for (i = index+1; i < arr.length; i++){
            if(curr+arr[i] === target){
                acc = []
                acc.push(index)
                acc.push(i)
            }
        }
            return acc
    }, [])

    return sumArr;
}

const value = twoSum([3,8, 3], 6)
console.log('value', value);





