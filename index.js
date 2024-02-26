// ANIMATED MINI PROJECT (JS CODE)
Shery.makeMagnet(".textmove", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.1,
});
function timed() {
  var i = 0;
  function updateText() {
    var numarray = [time1, time2, time3];
    if (i <= 2) {
      numarray[i]();
      i++;
      setTimeout(updateText, 600);
    }
  }

  updateText();
}
function time1() {
  var num = document.querySelector(".num");
  num.innerText = "Environments";
}
function time2() {
  var num = document.querySelector(".num");
  num.innerText = "Experiences";
}
function time3() {
  var num = document.querySelector(".num");
  num.innerText = "Content";
}
var t1 = gsap.timeline();
t1.to(".loader h1", {
  delay: 1,
  duration: 1,
  onStart: timed()
});
t1.to(".loader", {
  top: "-100vh",
  duration: 2
})
t1.to(".title", {
  width: "0%",
  height: "0%",
  opacity: 0,
  left: "-100",
})
t1.to(".textmove1", {
  top: "0px"
})
t1.to(".textmove2", {
  top: "0px"
})
t1.to(".textmove3", {
  top: "0px"
})

t1.to(".subanchor1", {
  top: "-100%"
});
t1.to(".subanchor2", {
  right: "-100%"
})
t1.to(".subanchor3", {
  top: "100%"
})
t1.to(".left h3", {
  opacity: 1
})
var elecon = document.querySelector(".choices");
var roughdiv = document.querySelector(".roughdiv");
elecon.addEventListener("mouseenter", function () {
  roughdiv.style.display = 'block';
})
elecon.addEventListener("mouseleave", function () {
  roughdiv.style.display = 'none';
})
const scroll = new LocomotiveScroll({
  el: document.querySelector('.main'),
  smooth: true
});
var choice = document.querySelectorAll(".choice1");
choice.forEach(function (example) {
  example.addEventListener("mouseenter", function () {
    var image = example.getAttribute("data-image");
    roughdiv.style.backgroundImage = `url("${image}")`;
  });
});
function design() {
  var design = document.getElementById("design");
  design.style.color = "#fff";
  var project = document.getElementById("execution");
  project.style.color = "#504A45";
  var project = document.getElementById("project");
  project.style.color = "#504A45";
  var projectimg = document.getElementById("rightimg");
  projectimg.src = "64d3dd9edfb41666c35b15e1_Project-p-1080.jpg";
  divElement = document.querySelector(".stline2");
  divElement.style.height = 10 + "vh";
  var matter = document.querySelector(".matter");
  matter.innerHTML = "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.";
}
function project() {
  var project = document.getElementById("project");
  project.style.color = "#fff";
  var project = document.getElementById("execution");
  project.style.color = "#504A45";
  var projectimg = document.getElementById("rightimg");
  projectimg.src = "64d3dd9edfb41666c35b15d0_Project.webp";
  var design = document.getElementById("design");
  design.style.color = "#504A45";
  divElement = document.querySelector(".stline2");
  divElement.style.height = 20 + "vh";
  var matter = document.querySelector(".matter");
  matter.innerHTML = "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.";
}
function execution() {
  var project = document.getElementById("execution");
  project.style.color = "#fff";
  var projectimg = document.getElementById("rightimg");
  projectimg.src = "64d3dd9edfb41666c35b15cd_Execution-p-1080.jpg";
  var design = document.getElementById("design");
  design.style.color = "#504A45";
  var project = document.getElementById("project");
  project.style.color = "#504A45";
  divElement = document.querySelector(".stline2");
  divElement.style.height = 35 + "vh";
  var matter = document.querySelector(".matter");
  matter.innerHTML = "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.";
}
var swiper = new swiper(".swiper-wrapper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
function hello() {
  var vv = document.querySelector(".vv");
  vv.style.scale = "1";
  vv.style.transition = 'all 1.5s ease-in'
}
function hello1() {
  var vv = document.querySelector(".vv");
  vv.style.scale = "0"
  vv.style.transition = 'all 1.5s ease-in'
}
function hello2() {
  var tryit = document.querySelector(".tryit");
  tryit.classList.add("tracking-in-expand-fwd");
  var tryit1 = document.querySelector(".tryit1");
  tryit1.classList.add("tracking-in-expand-fwd");
  var tryit2 = document.querySelector(".tryit2");
  tryit2.classList.add("slide-in-bck-tr");
}
function hello3() {
  var gallery1 = document.querySelector(".gallery1");
  gallery1.style.top = "-400px";
  var gallery2 = document.querySelector(".gallery2");
  gallery2.style.top = "100vw";
  var p1 = document.querySelectorAll(".p1");
  p1[0].classList.add("tracking-in-contract");
  p1[1].classList.add("tracking-in-contract");
  p1[2].classList.add("tracking-in-contract");
  p1[3].classList.add("tracking-in-contract");
  p1[4].classList.add("tracking-in-contract");
  p1[5].classList.add("tracking-in-contract");
  p1[6].classList.add("tracking-in-contract");
}
function hello5() {
  var container2 = document.querySelector(".container2");
  container2.style.scale = "1";
  container2.style.transition = 'all 1.5s ease-in';
}
function hello6() {
  var container2 = document.querySelector(".container2");
  container2.style.scale = "0.8";
  container2.style.transition = 'all 1.5s ease-in';
}
