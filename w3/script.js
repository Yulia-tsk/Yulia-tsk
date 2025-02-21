const button = document.getElementById('burger-btn');
const burgerMenu = document.getElementById('burger-menu');
const overlay = document.getElementById('overlay');



button.addEventListener('click', ()=> {
    button.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    

})