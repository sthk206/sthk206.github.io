window.addEventListener('DOMContentLoaded', function(){

    const [red, green, blue] = [255,255,255];
    const [red2, green2, blue2] = [0,0,0];
    const bod = document.querySelector('main');

    
    window.addEventListener('scroll', function(){
      // const y = 1 + (window.scrollY || window.pageYOffset) / 250;
      let y = 0 + (window.pageYOffset) / 150;
      
      // const [r, g, b] = [red/y, green/y, blue/y].map(Math.round);
      // const [r2, g2, b2] = [red2+65*y, green2+65*y, blue2+65*y].map(Math.round);
      let [r, g, b] = [0,0,0];
      let[r2,g2,b2] = [255,255,255]; 

      
      console.log(window.pageYOffset);
      if(window.pageYOffset < 775){
        // [r,g,b] =  [red/(1.7*y), green/(1.7*y), blue/(1.7*y)].map(Math.round);
        [r,g,b] =  [63,63,63];
        [r2,g2,b2] =  [red2+135*y, green2+135*y, blue2+135*y].map(Math.round);
        

      }
      else if(window.pageYOffset<1700){
        y = ((150*y) - 630) / 150;
        [r,g,b] =  [red2+65*y, green2+65*y, blue2+65*y].map(Math.round);
        [r2,g2,b2] = [red/y, green/y, blue/y].map(Math.round) ;

      }
      else{
        y = ((150*y) - 1700) / 150;
        [r,g,b] =  [red/(0.8*y), green/(0.8*y), blue/(0.8*y)].map(Math.round);
        [r2,g2,b2] =  [red2+65*y, green2+65*y, blue2+65*y].map(Math.round);
      }
        bod.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
        bod.style.color=`rgb(${r2}, ${g2}, ${b2})`

    });

})
var i = 0;
var txt = "Hi! I'm  Si Thu, an aspiring software developer.";
var type = '<em id="myname">|</em>';
var speed = 50; 

function typeW(){
  if (i < txt.length) {
    document.getElementById("fullscreen-intro").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeW, speed);
  }
  else{
    document.getElementById("fullscreen-intro").innerHTML += type;
  }
}
window.onload=typeW();



