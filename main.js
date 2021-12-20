var i = 0;
var txt = "Hi, My name is Si Thu.I'm an aspiring frontend developer with great interest in design.";
var speed = 50; 
var pCount = 0;

function typeW(){
  if (i < txt.length) {
    if(( txt.charAt(i) === ',') && i != txt.length-1){
      document.getElementById("fullscreen-intro").innerHTML += txt.charAt(i);
        document.getElementById("fullscreen-intro").innerHTML += "<br><br>";
        i++;
        pCount++;
        setTimeout(typeW, speed);
    }

    else if(( txt.charAt(i) === '.') && i != txt.length-1){
      document.getElementById("fullscreen-intro").innerHTML += txt.charAt(i);
      setTimeout(function()
      {
        document.getElementById("fullscreen-intro").innerHTML += "<br>";

      }, 650);
      setTimeout(function()
      {
        document.getElementById("fullscreen-intro").innerHTML += "<br>";

      }, 850);
      setTimeout(function()
      {
        i++;
        pCount++;
        setTimeout(typeW, speed);
      }, 1500);

    }
    else{
        document.getElementById("fullscreen-intro").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeW, pCount < 2? speed : speed/2);
    }

  }

}
window.onload= setTimeout(typeW, 800); 