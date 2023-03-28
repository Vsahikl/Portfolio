// method 1

var richPos=document.querySelectorAll('.nav-menu li a');
console.log(richPos.length);
var scrollVertically;
for(var i=0;i<richPos.length;i++){
    richPos[i].addEventListener('click',function(){
     
  var targetSectionId=this.textContent.trim().toLowerCase();
//   console.log(targetSectionId);
  var sectionId=document.getElementById(targetSectionId);
//   console.log(sectionId);

 scrollVertically=setInterval(function(){
  var coordinates=sectionId.getBoundingClientRect();
  if(coordinates.top<=0){
      clearInterval(scrollVertically);
      return;
  }
  window.scrollBy(0,50);
 },50);

    });
}





// method 2

// var richPos=document.getElementById('two');
// richPos.addEventListener('click',function(){
// var targetPos=200;
// var currentPos=0;
// var scrollInterval=setInterval(function(){
// if(currentPos>=targetPos){
//     clearInterval(scrollInterval);
//     return;
// }
// currentPos+=50;
// window.scrollBy(0,50);
// },50);
// });

// var richPos=document.getElementById('three');
// richPos.addEventListener('click',function(){
// var targetPos=600;
// var currentPos=0;
// var scrollInterval=setInterval(function(){
// if(currentPos>=targetPos){
//     clearInterval(scrollInterval);
//     return;
// }
// currentPos+=50;
// window.scrollBy(0,50);
// },50);
// });


// var richPos=document.getElementById('four');
// richPos.addEventListener('click',function(){
// var targetPos=950;
// var currentPos=0;
// var scrollInterval=setInterval(function(){
// if(currentPos>=targetPos){
//     clearInterval(scrollInterval);
//     return;
// }
// currentPos+=50;
// window.scrollBy(0,50);
// },50);
// });


// var richPos=document.getElementById('five');
// richPos.addEventListener('click',function(){
// var targetPos=1700;
// var currentPos=0;
// var scrollInterval=setInterval(function(){
// if(currentPos>=targetPos){
//     clearInterval(scrollInterval);
//     return;
// }
// currentPos+=50;
// window.scrollBy(0,50);
// },50);
// });


// var richPos=document.getElementById('six');
// richPos.addEventListener('click',function(){
// var targetPos=2400;
// var currentPos=0;
// var scrollInterval=setInterval(function(){
// if(currentPos>=targetPos){
//     clearInterval(scrollInterval);
//     return;
// }
// currentPos+=50;
// window.scrollBy(0,50);
// },50);
// });

// var richPos=document.getElementById('seven');
// richPos.addEventListener('click',function(){
// var targetPos=3200;
// var currentPos=0;
// var scrollInterval=setInterval(function(){
// if(currentPos>=targetPos){
//     clearInterval(scrollInterval);
//     return;
// }
// currentPos+=50;
// window.scrollBy(0,50);
// },50);
// });