const copy = document.getElementById("actual-color");
const button = document.getElementById("copy");
const alert = document.getElementById("alert");

button.onclick = () => {
    copy.select();
    copy.setSelectionRange(0, 99999); //for mobile
    document.execCommand("copy");
    alert.style.opacity = "1"; 
    setTimeout(() =>{
        alert.style.opacity = "0"; 
    }, 2000);
}