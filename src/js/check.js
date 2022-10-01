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
// check 
getBrowser();
function getBrowser() {
    let ieCheck = /Edg/.test(navigator.userAgent);
  
       ieCheck
       ? document.querySelectorAll('input').forEach( input => input.setAttribute('autocomplete', 'nope'))
       : null;
}