var i = 0;
var txt = "Hi, My name is Si Thu.I'm a frontend developer with a passion for building simple and effective software solutions.";
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
function openpdf(e){

  window.open(`./data/${e.target.dataset.file}`);
}
// loading projects
fetch('./data/projects.json')
  .then(data=>data.json())
  .then(projects=>{
    projects.forEach(project=>{
      if(project.comment===true) return;
      const d = document.createElement('div');
      d.classList.add('project-placard', `${project.type}`);

      const techList = document.createElement('p');
      project.tech.forEach((tech, index) => {
        console.log(tech);
        const techSpan = document.createElement('span'); // create a new span element
        techSpan.innerText = tech; // set the text of the span to the tech name
        techSpan.style.color = (tech==="Figma") ? "orange" : "rgb(185, 100, 255)"; // set the color of the span based on the tech
        techList.appendChild(techSpan); // add the span to the container
        if(project.tech.length - 1 > index) techList.appendChild(document.createTextNode(' | ')); // add the span to the container
      });

      const source = !project.source ? `<h4>Source: Work in Progres</h4>`:
        project.source.includes('.pdf')?  
        `<a onclick="openpdf(event)" data-file="${project.source}">Case Study</a>`:
        project.source.includes('figma.com') ?  
        `<a href="${project.source}">Figma</a>`:
        project.source.includes('medium.com') ?  
        `<a href="${project.source}">Medium</a>`:
        project.source.includes('github.com') ?  
        `<a href="${project.source}">Github</a>`:
        `<h4>Source: <a href=${project.source}>${project.source}</a></h4>` 

      // +
      d.innerHTML = `

      <img src="${project.image}"/>

      <div>
          <h1>${project.name}</h1>`
      + techList.outerHTML +
      `

          <h3>${project.desc}</h3>` 
      + source +

      `</div>
      `
      document.querySelector('.project-placards').appendChild(d);
    })

    const filters = document.querySelectorAll(".filter");
    const items = document.querySelectorAll(".project-placard");

    filters.forEach(filter => {
      filter.addEventListener("click", () => {
        const category = filter.dataset.category;
        if (category === "all") {
          items.forEach(item => {
            item.style.display = "grid";
            item.style.opacity = 1;
          });
        } else {
          items.forEach(item => {
            if (item.classList.contains(category)) {
              item.style.display = "grid";
              item.style.opacity = 1;
            } else {
              item.style.display = "none";
              item.style.opacity = 0;
            }
          });
        }
      });
    });
    filters.forEach(filter => {
      filter.addEventListener('click', ()=>{
        filters.forEach(i =>{
          if(i===filter){
            if (!i.classList.contains('active')) i.classList.add('active');
          } else {
            if (i.classList.contains('active')) i.classList.remove('active');
          }
        })

      })

    });
    document.querySelector('.projects-filters .filter').classList.add('active');
  });




