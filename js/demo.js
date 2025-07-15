// alert("welcome to my page of devlopment");
// document.write("please follow me on instagram ");
// var a;
// // a has a undefined value
// var a="tashik middha is very \"good boy\" yes";
// document.write("<br>")
//  document.write(a);
//  document.write("<br>")
//  document.write(typeof(a));
//  document.write("<br>")

// for  prompt anything
//   var name =prompt("what is yur name ");
//   if(name!=" ")
//   {
//     document.write("nice to meet you " + name );
//   }
// function myfun()
// {
//     // var usercon=confirm("do you want to wisit youtube.com ");
//     // if(usercon==true)
//     // {
//     //     window.open("https://www.youtube.com");
//     //     return true;
//     // }
//     // else{
//     //     document.write("you dont want to go to youtube .com ");
//     //     return false;
//     // }
//     window.open("https://www.youtube.com");
// }

// var a=document.getElementById("tas").innerHTML;
// document.write(a +"<br>");
// var b=document.getElementsByClassName("uk")[0].innerHTML;
// document.write(b);


 //console.log("hello world");

 // this is how you can find out the children of body tag
//  var child=document.body.children;
//  console.log(child);

//add a new child in a body
// var para=document.createElement("p");
// var textnode=document.createTextNode("hello this is a paragraph");
// para.appendChild(textnode);
// console.log(para);
// document.body.appendChild(para);

//access first and last child
var list=document.querySelector("ul");
console.log(list);
console.log(list.firstChild);
console.log(list.lastChild);
