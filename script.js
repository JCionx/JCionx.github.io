var path = window.location.pathname;
var page = path.split("/").pop();
console.log(page)

document.getElementById('hide').style.display = 'none';

// Gets the height of the header, so the nav can stick to the bottom of the header when opened.
document.getElementById('menu').style.top = `${document.getElementById('header').clientHeight}px`;

// Expands the nav menu
function openMenu() {
    document.getElementById('openMenu').style.display = 'none';
    document.getElementById('closeMenu').style.display = 'block';
    document.getElementById('menu').style.display = 'flex';
    document.getElementById('menu').style.animation = '0.2s ease-out 0s 1 slideDown';
    document.getElementById('header').style.borderBottomLeftRadius = '0';
    document.getElementById('header').style.borderBottomRightRadius = '0';
};

// Closes the nav menu
function closeMenu() {
    document.getElementById('closeMenu').style.display = 'none';
    document.getElementById('openMenu').style.display = 'block';
    document.getElementById('header').style.borderBottomLeftRadius = '10px';
    document.getElementById('header').style.borderBottomRightRadius = '10px';
    document.getElementById('menu').style.animation = '0.2s ease-out 0s 1 slideUp';
    setTimeout(function() {
        document.getElementById('menu').style.display = 'none';
    }, 200);
};

function homeShow() {
    document.getElementById('hideHome').style.display = 'block';
    document.getElementById('hideHome').style.animation = '0.4s ease-out 0s 1 unhide';
    document.getElementById('hide').style.display = 'block';
    document.getElementById('hide').style.animation = '0.4s ease-out 0s 1 unhide';
    setTimeout(function() {
        document.getElementById('startFlips').scrollIntoView({behavior: 'smooth'});
    }, 10);
}

if(screen.availHeight > screen.availWidth) {
    document.getElementById("mobileDifferent").style.flexDirection = 'column';
    document.getElementById("gradientTitle").style.fontSize = '13vh';
    document.getElementById("gradientTitle").style.lineHeight = '90%';
    document.getElementById("info").style.fontSize = '3vh';
}