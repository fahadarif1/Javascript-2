// var number = 12
// if(number %2 == 0 && number %3 == 0){
// console.log('yes');
// }
// else{
//     console.log('no');
// }


// """"""""""""""""""""""""""""""""""""""""""""""""""""

// var practical = 35
// var theory = 60
// if(practical >=30 || theory >= 55){
//    alert('you are pass')
// }else{
//     alert('you are fail')
// }

// """"""""""""""""""""""""""""""""""""""""""""""""""""

// var age = prompt('Enter your age');
// var idcard = prompt('do you have vaild ID card');
// if(age >=18 && idcard  === 'yes'){
//     alert('you are ready for vote')
// }else{
//     alert('you are not ready for vote')
// }

// ''''''''''''''''''''''''''''''''''''''''''''''''''''

// var number = +prompt("Enter")
// if(number % 4 == 0 && number % 100 != 0){
// console.log(ture);
// }else{
//     console.log(false);
// }

// ''''''''''''''''''''''''''''''''''''''''''''''''


var side1 = 4;
var side2 = 5;
var side3 = 10;
if(side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3  > side1){
    console.log("valid triangle");
}else{
    console.log("invalid triangle");
}