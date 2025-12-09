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
