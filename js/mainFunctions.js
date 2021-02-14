// hamburger menu button
var burgerButton = document.querySelector('.burger-menu');
// nav drop down menu
var mobileMenuToggle = document.getElementById('ul-selector');
// event listener activates upon click event
window.addEventListener('click', function(e) {
    var clickTarget = e.target;
// if the burger button is clicked, open the dropdown, else close it
    if (clickTarget.classList.contains('burger-menu') || clickTarget.parentElement.classList.contains('burger-menu')) {
        burgerButton.classList.toggle('toggle');
        mobileMenuToggle.classList.toggle('ul-display');
    } else {
        burgerButton.classList.remove('toggle');
        mobileMenuToggle.classList.remove('ul-display');    
    }
})
