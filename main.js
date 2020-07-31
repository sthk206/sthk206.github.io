window.addEventListener('DOMContentLoaded', function(){

    const [red, green, blue] = [255,255,255];
    const [red2, green2, blue2] = [0,0,0];
    const bod = document.querySelector('body');

    
    window.addEventListener('scroll', function(){
      const y = 1 + (window.scrollY || window.pageYOffset) / 250;
      const [r, g, b] = [red/y, green/y, blue/y].map(Math.round);
      const [r2, g2, b2] = [red2+65*y, green2+65*y, blue2+65*y].map(Math.round);


      bod.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
      bod.style.color=`rgb(${r2}, ${g2}, ${b2})`
    });

})



