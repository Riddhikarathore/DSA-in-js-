
         //starting with the very very easy ---
// let a = 10;
// let age = prompt("what is your age");
// console.log(a);
// console.log(age);

// function abc(){
//     var a = 12;
//     console.log(a);
// }
// abc();


// arrays

// leetcode problems

// two sum question -1

// input = [2,3,4,5,6]-- nums
// output =[11]-- target
// 5+6=11

var twosum = function(nums,target){
    for(let i = 0;i<nums.length;i++){
        for(let j = i +1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                return [nums[i],nums[j]]
            }
        }
    }
}
 var a = twosum([2,3,4,5,6],11)
 console.log(a)

// longest common prefix 
// problem number 14 in leetcode

input =["riddhika","riddhi","riddhu"]
output = ["riddh"]

var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return ""
    let prefix = strs[0];
    for(let i = 1; i<strs.length;i++){
        while(strs[i].indexOf(prefix)!==0){
            prefix=prefix.slice(0,-1);
            if(prefix == "") return "";
        }
    }
    return prefix;
};

var a = longestCommonPrefix(["riddhika","riddhi","riddhu"])

    console.log(a);


//remove duplicates from array 
//question number 26


var removeDuplicates = function(nums) {
     if (nums.length === 0) return 0;

    let i = 0;

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }

    return i + 1;  
};

//remove element question 27 

var removeElement = function(nums, val) {
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};


//search insert position 

var searchInsert = function(nums, target) {

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    // left is the insert position
    return left;
    
};

//plus one problem 

var plusOne = function(digits) {

    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    
    // case: all digits were 9
    digits.unshift(1);
    return digits;
    
};


//marge sorted array

var merge = function(nums1, m, nums2, n) {

     let i = m - 1;      // last valid index of nums1
    let j = n - 1;      // last index of nums2
    let k = m + n - 1;  // last index of nums1

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // if nums2 still has elements
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }


}

//convert the sorted array to binary search tree

var sortedArrayToBST = function(nums) {
    function helper(l, r) {
        if (l > r) return null;

        let mid = Math.floor((l + r) / 2);

        let root = new TreeNode(nums[mid]);
        root.left = helper(l, mid - 1);
        root.right = helper(mid + 1, r);

        return root;
    }

    return helper(0, nums.length - 1);
};


//pascal triangle 


var generate = function(numRows) {
    let result = [];

    for (let i = 0; i < numRows; i++) {
        result[i] = [];

        for (let j = 0; j <= i; j++) {
            
            if (j === 0 || j === i) {
                result[i][j] = 1;
            } else {
                
                result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
            }
        }
    }

    return result;
};


//pascal triangle 2

var getRow = function(rowIndex) {
    let row = new Array(rowIndex + 1).fill(0);
    row[0] = 1;

    for (let i = 1; i <= rowIndex; i++) {
        // right se update karna important hai
        for (let j = i; j > 0; j--) {
            row[j] = row[j] + row[j - 1];
        }
    }

    return row;
};

