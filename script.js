const modal=document.querySelector(".modal");
const overlay=document.querySelector(".overlay");

// modal open function 
function openmodal() {
    modal.classList.add("active");
    overlay.classList.add("overlayactive");  
};
function closemodal() {
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");  
};