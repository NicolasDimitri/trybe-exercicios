document.getElementById("header-container").style.backgroundColor = "green";

const emergencyH3 = document.querySelectorAll("section div h3");

for (i = 0; i < emergencyH3.length; i += 1) {
    emergencyH3[i].style.backgroundColor = "purple"
}
for (i = 2; i < emergencyH3.length; i += 1) {
    emergencyH3[i].style.backgroundColor = "black"
}
document.querySelector("section").style.backgroundColor = "pink"

document.querySelectorAll("section")[1].style.backgroundColor = "yellow"

document.querySelector("footer").style.backgroundColor = "green"