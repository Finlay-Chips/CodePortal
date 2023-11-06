function showPage(pageId) {
  // Hide all content pages
  var pages = document.querySelectorAll('.page');
  pages.forEach(function(page) {
      page.style.display = 'none';
  });

  // Show the selected content page
  var selectedPage = document.getElementById(pageId);
  if (selectedPage) {
      selectedPage.style.display = 'block';
  }
}

// Show the initial page (e.g., Page 1)
showPage('page1');
