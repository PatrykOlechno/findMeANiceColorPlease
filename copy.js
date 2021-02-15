const copy = document.getElementById("actual-color");
const button = document.getElementById("copy");

button.onclick = () => {
    copy.select();
    copy.setSelectionRange(0, 99999); //for mobile
    document.execCommand("copy");
    
}