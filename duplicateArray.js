const removeDuplicate = (nums) => {
    const a = nums.reduce((acc, curr, index, arr) => {
        const abc = [];
        if (curr === arr[index - 1]) {
            arr.splice(index, 1)
            abc.push(...arr);
        }
        acc = []
        acc.push(...abc)
        return acc
    }, [])
    return a;
}

const removeDuplicates = (nums) => {
//    nums = Array.from(new Set(nums))
//    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        //    var arr = Array.from(mySet1.add(nums[i]));
        if (nums[i] == nums[i+1]) {
            nums.splice(i, 1);
            i--;
            console.log('i after', i)
        }
    }
    console.log('%%%%', nums)
    return nums.length

}

const result = removeDuplicates([0,0,1,1,1,2,2,2,3,3,4]);
console.log(result)
