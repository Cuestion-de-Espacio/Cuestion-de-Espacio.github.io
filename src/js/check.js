getBrowser();
function getBrowser() {
    let ieCheck = /Edg/.test(navigator.userAgent);
  
       ieCheck
       ? document.querySelectorAll('input').forEach( input => input.setAttribute('autocomplete', 'nope'))
       : null;
}