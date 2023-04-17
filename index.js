
var MenuItems = document.getElementById("MenuItems");

MenuItems.styles.maxHeight ="0px";

function menutoggle(){
  if(MenuItems.style.maxHeight == "0px")
  {
    MenuItems.style.maxHeight = "200px";
  }
  else{
    MenuItems.style.maxHeight = "0px";
  }
};

window.onload = function hidemenu(){
  document.getElementById("MenuItems").style.display='none';
};

function myFunction(){
  var dots = document.getElementById("dots");
var more = document.getElementById("more-text");
var btn = document.getElementById("read-more-btn");
if(dots.style.display === "none")
{
  dots.style.display = "inline";
  more.style.display = "none";
  btn.innerHTML = "Read More";
}else{
  dots.style.display = "none";
  more.style.display = "inline";
  btn.innerHTML = "Read Less";
}
};

function myFunction2(){
  var dots = document.getElementById("dots2");
var more = document.getElementById("more-text2");
var btn = document.getElementById("read-more-btn2");
if(dots.style.display === "none")
{
  dots.style.display = "inline";
  more.style.display = "none";
  btn.innerHTML = "Read More";
}else{
  dots.style.display = "none";
  more.style.display = "inline";
  btn.innerHTML = "Read Less";
}
};

function myFunction3(){
  var dots = document.getElementById("dots3");
var more = document.getElementById("more-text3");
var btn = document.getElementById("read-more-btn3");
if(dots.style.display === "none")
{
  dots.style.display = "inline";
  more.style.display = "none";
  btn.innerHTML = "Read More";
}else{
  dots.style.display = "none";
  more.style.display = "inline";
  btn.innerHTML = "Read Less";
}
};

function myFunction4(){
  var dots = document.getElementById("dots4");
var more = document.getElementById("more-text4");
var btn = document.getElementById("read-more-btn4");
if(dots.style.display === "none")
{
  dots.style.display = "inline";
  more.style.display = "none";
  btn.innerHTML = "Read More";
}else{
  dots.style.display = "none";
  more.style.display = "inline";
  btn.innerHTML = "Read Less";
}
};

function myFunction5(){
var dots = document.getElementById("dots5");
var more = document.getElementById("more-text5");
var btn = document.getElementById("read-more-btn5");
if(dots.style.display === "none")
{
dots.style.display = "inline";
more.style.display = "none";
btn.innerHTML = "Read More";
}else{
dots.style.display = "none";
more.style.display = "inline";
btn.innerHTML = "Show Less";
}
};

function myFunction6(){
  var dots = document.getElementById("dots6");
  if(dots.style.display === "none")
{
  dots.style.display = "block";
 
}else{
  dots.style.display = "none";
}
};
function myFunction7(){
  var dots = document.getElementById("dots7");
  var more = document.getElementById("more-text7");
  var btn = document.getElementById("read-more-btn7");
  if(dots.style.display === "none")
  {
  dots.style.display = "inline";
  more.style.display = "none";
  btn.innerHTML = "Read More";
  }else{
  dots.style.display = "none";
  more.style.display = "inline";
  btn.innerHTML = "Show Less";
  }
  };







    
   