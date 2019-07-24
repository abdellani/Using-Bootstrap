window.onscroll=scroll
window.onresize=scroll

let headerNavbar=document.getElementById("header-navbar")
let headerDiv=document.getElementById("header-div")
let main = document.getElementsByTagName("main")[0]
headerNavbarPosition=headerNavbar.offsetTop
scroll();

function scroll(){
  if( window.pageYOffset>headerNavbarPosition || document.documentElement.clientWidth<1000)
  {
    let mainTopMargin=Number(main.offsetTop)
    headerDiv.classList.add("fixed-top")
    headerDiv.classList.add("header-scrolled-down")
    headerNavbar.classList.add("navbar-scrolled-down")
    headerNavbar.classList.remove("navbar-expand-lg")
    main.style.marginTop=mainTopMargin+"px"
  }
  else{
     headerDiv.classList.remove("fixed-top")
     headerDiv.classList.remove("header-scrolled-down")

     headerNavbar.classList.remove("navbar-scrolled-down")
     headerNavbar.classList.add("navbar-expand-lg")
     main.style.marginTop="0"
    }
}