/* 햄버거 버튼 클릭 이벤트*/
const navToggle = document.querySelector('.hamburger');
navToggle.addEventListener('click', ()=>{
    navMenu.classList.toggle('open');
})

/* 모바일에서 네비게이션 메뉴 클릭하면 메뉴 숨김*/

const navMenu = document.querySelector('.header_scroll');
navMenu.addEventListener('click', () =>{
    navMenu.classList.remove('open')
})