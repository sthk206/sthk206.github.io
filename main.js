var i = 0;
var txt = "Hi! My name is Si Thu.I'm an aspiring frontend developer with great interest in design.";
var type = '<span id="myname">|</span>';
var speed = 30; 

function typeW(){
  if (i < txt.length) {
    if((txt.charAt(i) === '!' || txt.charAt(i) === '.') && i != txt.length-1){
        document.getElementById("fullscreen-intro").innerHTML += txt.charAt(i);
        document.getElementById("fullscreen-intro").innerHTML += "<br><br>";
    }
    else{
        document.getElementById("fullscreen-intro").innerHTML += txt.charAt(i);
    }
    i++;
    setTimeout(typeW, speed);
  }
  else{
    document.getElementById("fullscreen-intro").innerHTML += type;
  }
}
window.onload=typeW();