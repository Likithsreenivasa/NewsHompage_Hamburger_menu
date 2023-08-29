const rightHeader=document.querySelector('.right-header-mobile');
const menuSvgMobile=document.querySelector('.menu-svg-mobile');
const rightUl=document.querySelector('.right-ul');
const menuSvgCLose=document.querySelector('.menu-close-mobile');
menuSvgMobile.addEventListener('click',()=>
{
    menuSvgCLose.style.display='block';
    menuSvgMobile.style.display='none';
    rightHeader.style.display='block';
    rightUl.style.display='block';
    rightUl.style.marginTop='2vh';
    rightUl.style.paddingTop='5vh';
})
menuSvgCLose.addEventListener('click',()=>
{
    menuSvgCLose.style.display='none';
    menuSvgMobile.style.display='block';
    menuSvgMobile.style.position='absolute';
    menuSvgMobile.style.marginLeft='75vw';
    menuSvgMobile.style.paddingTop='3vh';
    rightHeader.style.display='none';
    menuSvgMobile.style.paddingLeft='5vw';

})
