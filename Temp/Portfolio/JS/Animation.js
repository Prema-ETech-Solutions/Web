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



//Home Load Function Start
document.getElementById("s1").addEventListener("load", change_home_page());
function change_home_page() {
  let x = Math.floor(Math.random() * 4 + 1);
  let y = Math.floor(Math.random() * 2 + 1);
  // console.log("Done");
  // document.write("hhh");
  // console.log(x);
  // console.log(y);
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
document.getElementById("about").addEventListener("load", change_about_page());
function change_about_page()
{
  let x = Math.floor(Math.random() * 4 + 1);
  // console.log(x);
  
  if (x ==1)
  {
    document.getElementById("Logo-about").classList.remove("fa-id-card-clip");
    document.getElementById("Logo-about").classList.remove("fa-id-card");
    document.getElementById("Logo-about").classList.remove("fa-address-card");
    document.getElementById("Logo-about").classList.remove("fa-id-badge");
    
    document.getElementById("Logo-about").classList.add("fa-id-badge");
  }
  else if (x ==2)
  {
    document.getElementById("Logo-about").classList.remove("fa-id-card-clip");
    document.getElementById("Logo-about").classList.remove("fa-id-card");
    document.getElementById("Logo-about").classList.remove("fa-address-card");
    document.getElementById("Logo-about").classList.remove("fa-id-badge");
    
    document.getElementById("Logo-about").classList.add("fa-address-card");
  }
  else if (x ==3)
  {
    document.getElementById("Logo-about").classList.remove("fa-id-card-clip");
    document.getElementById("Logo-about").classList.remove("fa-id-card");
    document.getElementById("Logo-about").classList.remove("fa-address-card");
    document.getElementById("Logo-about").classList.remove("fa-id-badge");
    
    document.getElementById("Logo-about").classList.add("fa-id-card");
  }
  else if (x ==4)
  {
    document.getElementById("Logo-about").classList.remove("fa-id-card-clip");
    document.getElementById("Logo-about").classList.remove("fa-id-card");
    document.getElementById("Logo-about").classList.remove("fa-address-card");
    document.getElementById("Logo-about").classList.remove("fa-id-badge");
    
    document.getElementById("Logo-about").classList.add("fa-id-card-clip");
  }

  //About Values Starts 
  document.getElementById("Ph").innerHTML = "+91-7039956119";
  document.getElementById("Ph").style.color = "#000000";
  document.getElementById("email").innerHTML = "Premdangle@gmail.com";
  document.getElementById("email").href = "mailto:premdangle@gmail.com";
  document.getElementById("email").style.color = "#000000";
  document.getElementById("age").innerHTML = "21";
  document.getElementById("age").style.color = "#000000";
  document.getElementById("place").innerHTML = "Mumbai,India-421202";
  document.getElementById("place").style.color = "#000000";
  
  //About Values Ends 
}
// About Load Function End


document.getElementById("contact-me").addEventListener("load", change_contact_page());

function change_contact_page()
{
  let x = Math.floor(Math.random() * 4 + 1);
  // console.log(x);
  
  if (x ==1)
  {
    document.getElementById("Logo-contact").classList.remove("fa-phone");
    document.getElementById("Logo-contact").classList.remove("fa-mobile-screen");
    document.getElementById("Logo-contact").classList.remove("fa-square-phone");
    document.getElementById("Logo-contact").classList.remove("fa-mobile-screen-button");
    
    document.getElementById("Logo-contact").classList.add("fa-phone");
  }
  else if (x ==2)
  {
    document.getElementById("Logo-contact").classList.remove("fa-phone");
    document.getElementById("Logo-contact").classList.remove("fa-mobile-screen");
    document.getElementById("Logo-contact").classList.remove("fa-square-phone");
    document.getElementById("Logo-contact").classList.remove("fa-mobile-screen-button");
    
    document.getElementById("Logo-contact").classList.add("fa-mobile-screen");
  }
  else if (x ==3)
  {
    document.getElementById("Logo-contact").classList.remove("fa-phone");
    document.getElementById("Logo-contact").classList.remove("fa-mobile-screen");
    document.getElementById("Logo-contact").classList.remove("fa-square-phone");
    document.getElementById("Logo-contact").classList.remove("fa-mobile-screen-button");
    
    document.getElementById("Logo-contact").classList.add("fa-square-phone");
  }
  else if (x ==4)
  {
    document.getElementById("Logo-contact").classList.remove("fa-phone");
    document.getElementById("Logo-contact").classList.remove("fa-mobile-screen");
    document.getElementById("Logo-contact").classList.remove("fa-square-phone");
    document.getElementById("Logo-contact").classList.remove("fa-mobile-screen-button");
    
    document.getElementById("Logo-contact").classList.add("fa-mobile-screen-button");
  }

}


