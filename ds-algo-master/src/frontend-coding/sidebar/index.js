
(function(){
  console.log("Hi world");

  const sidebar = document.querySelector('.sidebar');
  const closeMenu = document.querySelector('#close-menu');

  closeMenu.addEventListener('click', toggleSidebarVisibility);

  function toggleSidebarVisibility(e) {
    sidebar.classList.toggle("sidebar--visible");
  }



}())