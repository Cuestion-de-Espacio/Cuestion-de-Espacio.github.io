/*-----------------------------------------------------------------------------------
    Name: Moon Site
    Theme URI: @chendoio
    Description: Web Site - Portfolio - Chendo
    Author: @chendoio - chendo : developer and web designer
    Author URI: http://chendo.io
    Github: https://github.com/chendoio
    Youtube: https://youtube.com/chendoio

//   Important:
//   Background images and planets taken from frontend mentor open source project :)
-----------------------------------------------------------------------------------*/
const item1 = document.querySelector('.li1 > a');
const item2 = document.querySelector('.li2 > a');
const item3 = document.querySelector('.li3 > a');
const item4 = document.querySelector('.li4 > a');
const bg1 = document.querySelector('.bg1');
const bg2 = document.querySelector('.bg2');
const bg3 = document.querySelector('.bg3');
const bg4 = document.querySelector('.bg4');

item1.addEventListener('mousemove', e => {
    e.preventDefault();
         bg1.style.opacity = 1;
         setTimeout(() => {
            bg1.style.filter = 'grayscale(0)';
        }, 500);
});
item1.addEventListener('mouseout', () => {
    bg1.style.opacity = 0;
    setTimeout(() => {
        bg1.style.filter = 'grayscale(1)';
    }, 500);
});
item2.addEventListener('mousemove', e => {
    e.preventDefault();
         bg2.style.opacity = 1;
         setTimeout(() => {
            bg2.style.filter = 'grayscale(0)';
        }, 500);
});
item2.addEventListener('mouseout', () => {
    bg2.style.opacity = 0;
    setTimeout(() => {
        bg2.style.filter = 'grayscale(1)';
    }, 500);
});
item3.addEventListener('mousemove', e => {
    e.preventDefault();
         bg3.style.opacity = 1;
         setTimeout(() => {
            bg3.style.filter = 'grayscale(0)';
        }, 500);
});
item3.addEventListener('mouseout', () => {
    bg3.style.opacity = 0;
    setTimeout(() => {
        bg3.style.filter = 'grayscale(1)';
    }, 500);
});
item4.addEventListener('mousemove', e => {
    e.preventDefault();
         bg4.style.opacity = 1;
         setTimeout(() => {
            bg4.style.filter = 'grayscale(0)';
        }, 500);
});
item4.addEventListener('mouseout', () => {
    bg4.style.opacity = 0;
    setTimeout(() => {
        bg4.style.filter = 'grayscale(1)';
    }, 500);
});