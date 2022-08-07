//Home Load Function Start
document.getElementById("s1").addEventListener("load", change_home_page());
function change_home_page() {
  let x = Math.floor(Math.random() * 4 + 1);
  let y = Math.floor(Math.random() * 2 + 1);
  console.log("Done");
  // document.write("hhh");
  console.log(x);
  console.log(y);
  if (x == 1) {
    if (y == 1) {
      document.getElementById("s1").style.flexDirection = "row";
    } else {
      document.getElementById("s1").style.flexDirection="row-reverse";
    }
    document.getElementById("home-right-4").style.display = "none";
    document.getElementById("home-right-3").style.display = "none";
    document.getElementById("home-right-2").style.display = "none";
    document.getElementById("home-right-1").style.display = "flex";
  } else if (x == 2) {
    document.getElementById("s1").style.flexDirection="row";
    document.getElementById("home-right-1").style.display = "none";
    document.getElementById("home-right-3").style.display = "none";
    document.getElementById("home-right-4").style.display = "none";
    document.getElementById("home-right-2").style.display = "flex";
  } else if (x == 3) {
    document.getElementById("s1").style.flexDirection="row-reverse";
    document.getElementById("home-right-1").style.display = "none";
    document.getElementById("home-right-2").style.display = "none";
    document.getElementById("home-right-4").style.display = "none";
    document.getElementById("home-right-3").style.display = "flex";
  } else if (x == 4) {
    if (y == 1) {
      document.getElementById("s1").style.flexDirection="row";
    } else {
      document.getElementById("s1").style.flexDirection="row-reverse";
    }
    document.getElementById("home-right-1").style.display = "none";
    document.getElementById("home-right-3").style.display = "none";
    document.getElementById("home-right-2").style.display = "none";
    document.getElementById("home-right-4").style.display = "flex";
  }
  /* display: flex; */
}
//Home Load Function end




// Auto typing Animation Start
var typed = new Typed(".auto-typing", {
  strings: [
    "HTML/CSS",
    "Javascript",
    "Python",
    "Java",
    "C",
    "Arduino",
    "C++",
    "VB .NET",
  ],
  loop: true,
  typeSpeed: 90,
  backSpeed: 90,
  backDelay: 1000,
});
// Auto typing Animation End


