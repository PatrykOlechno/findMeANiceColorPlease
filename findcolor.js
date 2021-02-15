const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const code = document.getElementById("actual-color");
let btn = document.getElementById("rand");

btn.onclick = () => {
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += hex[rand()];
    }
    code.value = color;
    document.body.style.backgroundColor = color;
}

function rand(){
    return Math.floor(Math.random() * hex.length);
}