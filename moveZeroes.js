// const moveZeroes = (arr) => {
//  arr = arr.sort();
//  const newArr = []
//  for(let i=0; i<arr.length; i++){
//     if(arr[i] === 0){
//         newArr.push(arr[i])
//         arr.splice(i,1);
//         i--;
//     }
//  }
//  return [...arr, ...newArr]
// }

// const a = moveZeroes([0])
// console.log(a)

const moveZeroes = (nums) => {
    var pos = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            console.log(nums, 'nums1')
            nums[pos++] = nums[i];
            console.log(nums, pos, 'nums2')
        }
    }
    console.log(nums, pos, 'nums23')
    for (i = pos; i < nums.length; i++) {
        nums[i] = 0;
    }
return nums
}

const a = moveZeroes([0,23,1,2,0,8,9,3,0])
console.log(a)
