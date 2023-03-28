var color_fill=document.querySelectorAll('.skill-progress > div');
var skiLLContainer=document.getElementById('skills');
window.addEventListener('scroll',checkScroll);
var animationDone=false;

function initialBars(){
    for(let bar of color_fill){
        bar.style.width=0 + '%';
    }
}

initialBars();
function fillColor(){
    for(let bars of color_fill){
       let targetWidth=bars.getAttribute('data-bar-width');
       console.log(targetWidth);
      let currentWidth=0;
      let interval=setInterval(function(){
       if(currentWidth >=targetWidth){
        clearInterval(interval);
        return;
       }
       currentWidth++;
       bars.style.width=currentWidth + '%';
      },10)
    }
}


function checkScroll(){
    // you have to check whether skill container is visible
    var coordinates=skiLLContainer.getBoundingClientRect();
    if( !animationDone &&coordinates.top<window.innerHeight){
        animationDone=true;
        // console.log("hey");
        fillColor();
    }else if(coordinates.top>window.innerHeight){
        animationDone=false;
        initialBars();
    }

   
}


