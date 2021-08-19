
// This are all variables 
// initialised using document.querySelector

var btn = document.querySelector('.btn');
var btn1 = document.querySelector('.btn1');
var user = document.querySelector('.circle');
var popup = document.querySelector('.popup');
var close = document.querySelector('.close');
var order = document.querySelector('.order');
var sign = document.querySelector('.sign');
var important = document.querySelector("button");
var container = document.querySelector('.container')

// Variable over


// on clicking sign button load the page call some method
sign.onclick = function some(){
  window.location.href = 'file:///C:/Users/RASILABEN/Desktop/Web%20Dev/projectfile/card.html';
}

//on clicking btn make it im=nvisible and alert a message
btn.onclick = function a1(){
  btn.style.display = 'none'

  alert("Ordered from Home Restaurant")
  // On clickcing order.innerhtml will get (1)
 order.innerHTML = " My Oders(1)"
}


//on clicking btn1 make it im=nvisible and alert a message
btn1.onclick = function a(){
  btn1.style.display = 'none'
  // On clickcing order.innerhtml will get (2)
  order.innerHTML = "My Orders(2)"
  alert("Ordered from Veer Artifacts")

}
// on clicking user icon make popup visible and make itsef invisible
user.onclick = function name(){
popup.classList.add('block');
user.style.display = 'none';
}

// undo the action in function name by using .remove 
close.onclick = function(){
  popup.classList.remove('block');
user.style.display = 'block';
}

var myFunc = function() {
  container.classList.add('hover');
}
window.onload = function() {
  setTimeout(myFunc, 600);
}


var pf = function() {
  container.classList.add('postfinal');
}
window.onload = function() {
  setTimeout(pf, 700);
}
