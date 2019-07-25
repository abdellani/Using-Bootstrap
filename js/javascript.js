window.onscroll = scroll
window.onresize = scroll

let headerNavbar = document.getElementById("header-navbar")
let headerDiv = document.getElementById("header-div")
let main = document.getElementsByTagName("main")[0]
let navbarToggler = document.getElementById("navbar-toggler")


headerNavbarPosition = headerNavbar.offsetTop

scroll();

function scroll() {
  if (window.pageYOffset > headerNavbarPosition || document.documentElement.clientWidth < 1000) {
    let mainTopMargin = Number(main.offsetTop)
    headerDiv.classList.add("fixed-top")
    headerDiv.classList.add("header-scrolled-down")
    headerNavbar.classList.add("navbar-scrolled-down")
    headerNavbar.classList.remove("navbar-expand-lg")
    main.style.marginTop = mainTopMargin + "px"
    showHideNavbar()
  }
  else {
    headerDiv.classList.remove("fixed-top")
    headerDiv.classList.remove("header-scrolled-down")

    headerNavbar.classList.remove("navbar-scrolled-down")
    headerNavbar.classList.add("navbar-expand-lg")
    main.style.marginTop = "0"
    showNavbar()
  }

}

function updateToggleNavbarButton() {
  let isNavbarToggled = navbarToggler.dataset.toggled;
  if (isNavbarToggled === "true") {
    navbarToggler.dataset.toggled = "false"
  } else {
    navbarToggler.dataset.toggled = "true"
  }
  showHideNavbar()
}
function showHideNavbar() {
  let isNavbarToggled = navbarToggler.dataset.toggled;
  if (isNavbarToggled === "false") {
    headerNavbar.style.display = "block"
  } else {
    headerNavbar.style.display = "none"
  }
}
function showNavbar() {
  headerNavbar.style.display = "block"
}