document.getElementById("myDropdown").onclick = function () { myFunction() };

function myFunction() {
    document.getElementById("myBtn").classList.toggle("hide");
}

document.getElementById("myBtn").onclick = function () { myFunction() };

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

/*const menuItems = document.querySelectorAll("#dropdown-content")

for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", () => {
        changeBodyBg(i);
    });
}*/


function changeBodyBg(color) {
    document.body.style.background = color;

}