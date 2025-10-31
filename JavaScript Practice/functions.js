import {divide,sub} from "./math.js";

function add(a,b){
    return a+b;
}

const func=function(a,b){ //function using const 
    return a*b;
}

console.log(add(5,4));
console.log(func(4,5));

console.log(divide(10,2));
console.log(sub(10,4));

//Basic pages with react-router
//Browser router  (inbuilt,enable client side routing,enable browser history api,maintain SPA)
//Routes(parent tag for all routes,child tags will be route) 
//route (self closing tag)
//link(for navigation b/w pages,like anchor tag in html)


//server side routing(every time you click on a link it makes a request to the server)
//client side routing(every time you click on a link it does not make a request to the server,it just loads the component on the client side)
