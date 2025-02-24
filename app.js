const navBtn = document.querySelector(".navList");
const menuBtn = document.querySelector("#menu-btn");


menuBtn.addEventListener("click", ()=> {
    // navBtn.classList.toggle("active");
    navBtn.style =
    '    position: flex',
   ' right:0';
})


navBtn.addEventListener("click", ()=> {
    navBtn.style =
   ' right:-100%';
   navBtn.classList.toggle("active"); 
})
