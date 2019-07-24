window.onscroll=scroll
window.onresize=scroll

let headerNavbar=document.getElementById("header-navbar")
headerNavbarPosition=headerNavbar.offsetTop

let headerDiv=document.getElementById("header-div")
scroll();

function scroll(){
  if( window.pageYOffset>headerNavbarPosition || document.documentElement.clientWidth<1000)
  {
    headerDiv.classList.add("fixed-top")
    headerDiv.classList.add("header-scrolled-down")

    headerNavbar.classList.add("navbar-scrolled-down")
    headerNavbar.classList.remove("navbar-expand-lg")
  }
  else{
     headerDiv.classList.remove("fixed-top")
     headerDiv.classList.remove("header-scrolled-down")

     headerNavbar.classList.remove("navbar-scrolled-down")
     headerNavbar.classList.add("navbar-expand-lg")
    }
}