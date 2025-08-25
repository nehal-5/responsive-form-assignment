const popup = document.getElementById("popup");
const form = document.getElementById("myForm");
function showPopUp() {
    event.preventDefault();
    popup.classList.add("active");
}

function closePopUp() {
    popup.classList.remove("active");
    form.reset();
}