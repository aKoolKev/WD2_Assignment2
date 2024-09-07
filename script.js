// // global var
// let sidebarVisible = false;



// function toggleSideBar(){

//     //get the side bar element
//     let sideBar_el = document.getElementById('tablet-side-bar');
    
//     //

    
//     if(sidebarVisible){
//         //hide sidebar
//         sideBar_el.classList.remove('show-side-bar');
//         sideBar_el.classList.add('hide-side-bar');
//         //show hamburger button
//         //remove hid button
//         alert('hide');
//     }else{
//         //show sidebar
//         sideBar_el.classList.remove('hide-side-bar');
//         sideBar_el.classList.add('show-side-bar');
//         alert('show');
//     }

//     sidebarVisible = !sidebarVisible;
// }




function hideSideBar(){
    //get the side bar element
    let sideBar_el = document.getElementById('mobile-side-bar');
    sideBar_el.classList.remove('show-side-bar');
    sideBar_el.classList.add('hide-side-bar');
}

function showSideBar(){
    //get the side bar element
    let sideBar_el = document.getElementById('mobile-side-bar');
    sideBar_el.classList.remove('hide-side-bar');
    sideBar_el.classList.add('show-side-bar');
}





window.onload = function(){
    //grab the show hamburger menu button and add an event listner to it
    let hamburgerMenu_buttonEl = document.getElementById('hamburger-menu-button').addEventListener('click', showSideBar);
    let hideSideBar_buttonEl = document.getElementById('hide-sidebar-button').addEventListener('click', hideSideBar);
}