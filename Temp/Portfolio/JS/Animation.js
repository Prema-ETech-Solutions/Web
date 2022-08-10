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

// About Load Function Start
document.getElementById("about-title").addEventListener("load", change_about_page());
function change_about_page()
{
  console.log("OK");
  document.getElementById("me").style.color = "#70ba65";
  let x = Math.floor(Math.random() * 4 + 1);
  if(x == 1)
  {
    document.getElementById("about-logo-1").classList.remove("fa-regular");
    document.getElementById("about-logo-1").classList.remove("fa-address-card");

    document.getElementById("about-logo-1").classList.remove("fa-solid");
    document.getElementById("about-logo-1").classList.remove("fa-user");
    
    
    document.getElementById("about-logo-1").classList.add("fa-solid");
    document.getElementById("about-logo-1").classList.add("fa-address-card");
    
  }
  else if(x == 2)
  {
    document.getElementById("about-logo-1").classList.remove("fa-regular");
    document.getElementById("about-logo-1").classList.remove("fa-address-card");

    document.getElementById("about-logo-1").classList.remove("fa-solid");
    document.getElementById("about-logo-1").classList.remove("fa-address-card");
    
    document.getElementById("about-logo-1").classList.add("fa-solid");
    document.getElementById("about-logo-1").classList.add("fa-user");
  }
  else
  {
    
    document.getElementById("about-logo-1").classList.remove("fa-solid");
    document.getElementById("about-logo-1").classList.remove("fa-user");

    document.getElementById("about-logo-1").classList.remove("fa-solid");
    document.getElementById("about-logo-1").classList.remove("fa-address-card");

    document.getElementById("about-logo-1").classList.add("fa-address-card");
    document.getElementById("about-logo-1").classList.add("fa-regular fa-address-card");
  }
}
// About Load Function End




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


