const wrapper=document.querySelector('.wrapper');
 
const btnPopup=document.querySelector('#btn');
const iconClose=document.querySelector('.icon-close');
  btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
  });
  iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
  });
  