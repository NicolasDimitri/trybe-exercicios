const btn = document.querySelector("button");

btn.addEventListener("click", contador);

function contador() {
    let p = document.querySelector("p");
    if (p.innerHTML === "") {
    p.innerText = 1;
    } else {
        p.innerText = parseInt(p.innerText) + 1;
    }
}