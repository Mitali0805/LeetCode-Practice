
// const reverseArray = (arr) => {
//     // return arr.reverse()
//     const reverseArr = []
//     for(let i=(arr.length-1); i>=0; i--){
//         reverseArr.push(arr[i])
//     }
//     return reverseArr
// }

// const result = reverseArray([1, 2, 3])
// console.log('result', result)

const reverseString = (str) => {
    // return [...str].reverse().join('')
    let reverseStr = ""
    for(let i=(str.length-1); i>=0; i--){
        console.log('@@@', str[i])
        reverseStr += str[i]
    }
    return reverseStr
}

const result1 = reverseString("Greetings from Earth")
console.log('result', result1)


const a = {}
const b = {}
const c =a;
a.key = 'hello'
console.log('a===c', c)