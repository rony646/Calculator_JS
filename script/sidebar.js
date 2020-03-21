var openMenu = document.getElementById('openMenu')
var closeMenu = document.getElementById('closeMenu');
var lateralMenu = document.querySelector('.menuOpen')

// Side bar menu config

openMenu.addEventListener('click', function() {
    openMenu.style.display = 'none';
    lateralMenu.style.display = 'block';
})


closeMenu.addEventListener('click', function() {
    openMenu.style.display = 'block';
    lateralMenu.style.display = 'none';
})