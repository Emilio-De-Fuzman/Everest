window.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
    var scrollBtn = document.getElementById('scrollBtn');
    if (document.documentElement.scrollTop > 0) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  });
  
  document.getElementById('scrollBtn').addEventListener('click', function() {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});