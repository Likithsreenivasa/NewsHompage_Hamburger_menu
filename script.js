const header=document.querySelector('.header');
const rightHeader=document.querySelector('.right-header');
const leftHeader=document.querySelector('.left-header');
const menuOpen=document.querySelector('.menu-svg');
const menuClose=document.querySelector('.menu-close');
const rightHeaderUl=document.querySelector('.right-header-ul');
const container=document.querySelector('.container');
const rightHeaderLi=document.querySelector('.right-header-li');
menuOpen.addEventListener('click',()=>
{
    rightHeader.style.display='block';
    menuClose.style.display='block';
    menuOpen.style.display='none';
    // rightHeader.style.marginTop='3vh';
    // rightHeader.style.opacity='0.7';
    rightHeader.style.backgroundColor='rgb(254, 253, 249)';
    rightHeader.style.width='65vw';
    rightHeader.style.position='absolute';
    // rightHeaderUl.style.display='block';
    rightHeaderUl.style.flexDirection='column';
    rightHeader.style.zIndex=15;
    container.style.backgroundColor="rgb(128, 126, 137)";
})
menuClose.addEventListener('click',()=>
{
    menuOpen.style.display='block';
    menuClose.style.display='none';
    rightHeader.style.display='none';
    container.style.backgroundColor='rgb(254, 253, 249)';
    // rightHeaderUl.style.display='none';
    // rightHeaderUl.style.display='none';
    rightHeaderUl.style.flexDirection='row';
    // rightHeaderUl.style.zIndex=0;

})











// menuOpen.addEventListener('click',()=>
// {
//     menuOpen.classList.add(style.display='none');
//     menuClose.classList.add(style.display='block');
//     rightHeader.classList.add(style.display='block');
    // header.appendChild(rightHeader);
    // rightHeaderUl.style.display='flex';
    // rightHeaderUl.style.flexDirection='column';
    // rightHeader.style.width='50vw';
    // rightHeader.style.marginRight='0';
    // rightHeader.style.height='30vh';
    // rightHeader.style.border='1px solid red';
    // rightHeader.style.backgroundColor='fefdf9';
    // container.style.backgroundColor='rgb(128, 126, 137)';
    
    // menuClose.style.position='absolute';
    // menuClose.style.marginLeft='50vw';
    // menuClose.style.zIndex=15;
    // rightHeaderUl.style.paddingTop='60vh';
    // rightHeaderUl.style.paddingBottom='1vh';
//     // rightHeaderUl.style.paddingLeft="20vw";
//     // rightHeader.style.paddingBottom="100vh";
//     // rightHeader.style.position='absolute';
//     // rightHeader.style.zIndex=15;
//     // rightHeader.style.marginLeft='20vh';
//     // rightHeader.style.backgroundColor='rgb(254, 253, 249)';
// })
// menuClose.addEventListener('click',()=>
// {
//     menuClose.style.display="none";
//     menuOpen.style.display="block";
//     rightHeader.style.display='none';
//     menuOpen.style.marginLeft='70vw';
//     menuOpen.style.position='absolute';
//     rightHeaderUl.style.display='none';
    
// })