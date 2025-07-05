function setupNavbarEvents() {
  const menuIcon = document.getElementById('menuIcon');
  const navLinks = document.getElementById('navLinks');
  const searchIcon = document.getElementById('searchIcon');
  const searchOverlay = document.getElementById('searchOverlay');
  const projectsBtn = document.getElementById('projectsBtn');
  const submenu = document.getElementById('submenu');

  let clickTimeout = null;

  if (!menuIcon || !projectsBtn) return; // Avoid running if navbar hasn't loaded

  // Toggle mobile menu
  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Handle single and double click for all devices
  projectsBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (clickTimeout !== null) {
      clearTimeout(clickTimeout);
      clickTimeout = null;
      window.location.href = './project.html'; // Update to correct page
    } else {
      clickTimeout = setTimeout(() => {
        submenu.classList.toggle('show');
        clickTimeout = null;
      }, 300);
    }
  });

  // Hide submenu on outside click
  document.addEventListener('click', (e) => {
    if (!submenu.contains(e.target) && !projectsBtn.contains(e.target)) {
      submenu.classList.remove('show');
    }
    if (!searchOverlay.contains(e.target) && !searchIcon.contains(e.target)) {
      searchOverlay.style.display = 'none';
    }
  });

  // Prevent submenu close on internal click
  submenu.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // Toggle search
  searchIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    searchOverlay.style.display = 'flex';
  });
}
