(function(){
  var nav = document.getElementById('mainNav');
  var lastScroll = 0;
  window.addEventListener('scroll', function(){
    var y = window.scrollY || window.pageYOffset;
    if(y > 60){
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    lastScroll = y;
  }, {passive:true});
})();

document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector('.zoom-card');
  const overlay = document.getElementById('zoomOverlay');
  const closeBtn = document.getElementById('zoomClose');

  if (!card || !overlay || !closeBtn) return; // safety

  card.addEventListener('click', () => {
    overlay.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.remove('active');
  });
});
