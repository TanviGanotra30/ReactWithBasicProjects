var arr=[1,2,3,4];
arr.push(5);
console.log(arr);

let fruits=["mango","banana","apple"];
let veg=["potato","onion"];
console.log(fruits);

const str="hello";
const chars=Array.from(str);
console.log(chars); //['h','e','l','l','o']

const concati=fruits.concat(veg);
console.log(concati);

const nums=[1,3,4,5,6,8];
const evenNums=nums.filter(n=> n%2===0);
console.log(evenNums);


const items=["a","b","c","d"];
console.log(items.indexOf("d"));
console.log(items.indexOf("x"));


let v="p";
let a=0;
for(var i=0;i<items.length;i++){
    if(items[i]===v){
     a=1;   
     break;
    }
}

if(a===1){
    console.log(v+" is there");
}else{
     console.log(v+" is not there");
}

const num=[1,2,3];
const sqr=num.map(n=>n*n);
console.log(sqr);
num.reverse();
console.log(num);

