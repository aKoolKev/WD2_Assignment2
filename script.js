
// Applies the 'hide-side-bar' css style to the mobile side bar to "hide" it
function hideSidebar(){
    //Get the mobile sidebar element
    let sideBar_el = document.getElementById('mobile-side-bar');
    sideBar_el.classList.remove('show-side-bar');
    sideBar_el.classList.add('hide-side-bar');
}

// Applies the 'show-side-bar' css style to the mobile side bar to "show" it
function showSidebar(){
    //Get the mobile sidebar element
    let sideBar_el = document.getElementById('mobile-side-bar');
    sideBar_el.classList.remove('hide-side-bar');
    sideBar_el.classList.add('show-side-bar');
}

window.onload = function(){
    // Grab the buttons and when clicked, run their respective function call when clicked
    document.getElementById('hamburger-menu-button').addEventListener('click', showSidebar);
    document.getElementById('hide-sidebar-button').addEventListener('click', hideSidebar);
}
