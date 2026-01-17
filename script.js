
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

 
