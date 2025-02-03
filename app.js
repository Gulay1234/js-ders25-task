
let button = document.querySelector("#button1");
button.addEventListener("click", () => {
    let a = prompt("Bu formatda daxil edin:width,height,bgColor,color");
    let b = a.split(',');
    width = b[0];
    height = b[1];
    bgColor = b[2];
    color = b[3];

    let td1 = document.querySelector("#td1");
    td1.innerText = width + "px";

    let td2 = document.querySelector("#td2");
    td2.innerText = height + "px";

    let td7 = document.querySelector("#td7");
    td7.innerText = bgColor;

    let td8 = document.querySelector("#td8");
    td8.innerText = color;

});

let button2 = document.querySelector("#button2")

button2.addEventListener("click",()=>{
    let div = document.createElement("div");
    div.innerText = "Lorem dolor sit impusum."
div.style.fontSize = "15px"
    div.style.width = width + "px";
    div.style.height = height + "px";
    div.style.backgroundColor = bgColor;
    div.style.color = color;

    document.body.appendChild(div);
    })