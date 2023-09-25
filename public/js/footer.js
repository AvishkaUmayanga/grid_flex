document.addEventListener('DOMContentLoaded', function(){
    const navbarIcon = document.querySelector('#navbars-icon');
    const navBar = document.querySelector('.navigation-bar');

    const navLinks = navBar.querySelector('ul'); 

    const mainText = document.querySelector('.main-heading');
    const buttons = document.querySelector('.login-signup');

    navbarIcon.addEventListener('click', function(){
        console.log('click icon');
        if(navLinks.style.display === 'none'){
            navLinks.style.display = 'block';

            mainText.style.alignItems = 'flex-start';
            mainText.style.paddingTop = '20px';

            buttons.style.alignItems = 'flex-start';
            buttons.style.paddingTop = '20px';
        }
        else{
            navLinks.style.display = 'none';

            mainText.style.alignItems = 'center';
            mainText.style.paddingTop = '0px';

            buttons.style.alignItems = 'center';
            buttons.style.paddingTop = '0px';
        }
    });
});
