//navbar toggling
const navbarShowBtn = document . querySelector(' .navbar-show-btn');
const navbarCollapseDiv = document . querySelector(' .navbar-collapse');
const navbarHideBtn = document . querySelector('.navbar-hide-btn');

navbarShowBtn.addEventListener('click', function(){
    navbarCollapseDiv.classList.add('navbar-show');
});
navbarHideBtn.addEventListener('click', function(){
    navbarCollapseDiv.classList.remove('navbar-show');
})

//changing search icon image on window resize
window.addEventListener('resize', changeSearchIcon);
function changeSearchIcon(){
    let winsize = window.matchMedia("(min-width: 1200px)");
    if(winSize.matches){
        document.querySelector('.search-icon img').src = "images/icons8-search-50.png";
    } else {
        document.querySelector('.search-icon img').src = "image/icons8-search-50-dark.png";
    }
}
changeSearchIcon();

// stopping all animation and transition
let resizeTime;
window,addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});