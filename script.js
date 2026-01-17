
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

//leetcode problems

// two sum question -1

//input = [2,3,4,5,6]-- nums
//output =[11]-- target
//5+6=11

// var twosum = function(nums,target){
//     for(let i = 0;i<nums.length;i++){
//         for(let j = i +1;j<nums.length;j++){
//             if(nums[i]+nums[j]==target){
//                 return [nums[i],nums[j]]
//             }
//         }
//     }
// }
//  var a = twosum([2,3,4,5,6],11)
//  console.log(a)

//longest common prefix 
//problem number 14 in leetcode

//input =["riddhika","riddhi","riddhu"]
//output = ["riddh"]

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


