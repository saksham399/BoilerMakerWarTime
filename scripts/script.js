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
  const cards = document.querySelectorAll('.zoom-card');

  const overlay1 = document.getElementById('zoomOverlay');
  const overlay2 = document.getElementById('zoomOverlay2');

  cards.forEach((card, index) => {
    card.addEventListener('click', () => {
      if (index === 0 && overlay1) overlay1.classList.add('active');
      if (index === 1 && overlay2) overlay2.classList.add('active');
    });
  });

  function wireOverlay(overlay) {
    if (!overlay) return;

    const closeBtn = overlay.querySelector('.close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => overlay.classList.remove('active'));
    }

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.classList.remove('active');
    });
  }

  wireOverlay(overlay1);
  wireOverlay(overlay2);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (overlay1) overlay1.classList.remove('active');
      if (overlay2) overlay2.classList.remove('active');
    }
  });
});
