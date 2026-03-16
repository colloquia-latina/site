// Common JavaScript for Colloquia Latina
// Initialize Headroom.js for mobile header hide/show on scroll

document.addEventListener('DOMContentLoaded', function() {
  var header = document.querySelector('.headroom');
  if (header) {
    var headroom = new Headroom(header, {
      offset: 100,
      tolerance: 5,
      classes: {
        pinned: 'headroom--pinned',
        unpinned: 'headroom--unpinned'
      }
    });
    headroom.init();
  }
});
