var menu =  document.getElementById("menu")
var closeMenu =  document.getElementById("closeMenu")
var linkDiv =  document.getElementById("navLinks")

closeMenu.addEventListener("click", () => {
    linkDiv.style.display = "none"
    menu.style.display = "flex"
})

menu.addEventListener("click", () => {
    linkDiv.style.display = "flex"
})