var toggle = document.getElementById("toggle-theme");
var body = document.querySelector("body");
var moon = document.getElementsByClassName("far");
 
function dark() {
    body.className = "body-toggle";
    moon.className = "far-toggle";
}


toggle.addEventListener("click", function()  {
        dark().toggle
})

