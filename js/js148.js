const nums1 = [1, -2, 3, 4];
const nums2 = [8, 3, -8, 1];


/*merge array*/
let merge = [...nums1,...nums2]
/*add 5 to first nums1 element */
merge.unshift(5)
/*add -6,-1  */
merge.splice(nums1.length+1,0,-6,-1)
