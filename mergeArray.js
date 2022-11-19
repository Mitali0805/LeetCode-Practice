// const mergeArray = (nums1, m, nums2, n) => {
//     nums1.push(...nums2)
//     nums1 = nums1.sort((a, b) => {
//         return a - b
//     })
//     const indices = [];
//     let idx = nums1.indexOf(0);
//     while (idx !== -1) {
//         indices.push(idx)
//         idx = nums1.indexOf(0, idx + 1);
//     }
//     console.log(indices)
//     nums1.splice(1,1)
//     for(let i=0; i< indices.length; i++){
//         nums1.splice(indices[i], 1)
//     }
//     console.log(nums1)
//     return nums1
// }

var merge = function (nums1, m, nums2, n) {
    var insertPos = m + n - 1;
    m--; n--;
    while (n >= 0) {
        nums1[insertPos--] = (nums1[m] > nums2[n]) ? nums1[m--] : nums2[n--];
    }
    return nums1
};


const result = merge([0, 0, 1, 3, 2], 3, [2, 5, 6], 3);
console.log('####', result);