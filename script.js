// Task1
var numbers=[1,2,3,4,5,6,7,8,100,7]

function even (data){
    var evenNums=[]
for(i=0; i<data.length; i++){
    if(data[i]%2==0){
        evenNums.push(data[i])
    }
}
console.log("Even numbers are " + evenNums)
}
even(numbers)
/////////////////////////////////////////////
function max(data){
    var maxNum=0;
    for(i=0; i<data.length; i++){
        if(data[i]>maxNum){
            maxNum=data[i]
        }
    }
    console.log("The Largest Number is "+maxNum)
}
max(numbers)
//////////////////////////////////////-
var name="Hamza"
function reversed(word){
    var reversedWord=[];
    for(i=word.length-1; i>=0; i--){
        reversedWord.push(word[i])
    }
    console.log("The Reversed Word is "+reversedWord.join(""))
}
reversed(name)
///////////////////////////////////////////////
function dublicated(data){
    const mySet=new Set(data)
console.log(mySet)
}

dublicated(numbers)
// const mySet=new Set([1,2,2,3,4,4,3,3,])
// console.log(mySet)