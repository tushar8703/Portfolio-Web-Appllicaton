const navigationBar = document.querySelector(".navList");
const menuBtn = document.querySelector("#menu-btn");


menuBtn.addEventListener("click", ()=> {
    navigationBar.classList.toggle("active");
    console.log("noke")

})


navigationBar.addEventListener("click", ()=> {
    console.log("hello")
    navigationBar.style =
    '    position: flex',
       ' right: -100%';
    navigationBar.classList.toggle("active");
    
})
