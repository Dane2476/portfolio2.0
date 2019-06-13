document.addEventListener("DOMContentLoaded", function(){
  document.querySelectorAll('.preload').forEach(function(item){
    item.classList.add('loaded');
    item.classList.remove('preload');
  });

  var toTop = document.querySelector("#to-top");
  document.addEventListener('scroll', function(){
    if (window.innerWidth > 799.88){
      if (window.scrollY > 150){
        toTop.style.visibility = 'visible';
        toTop.style.opacity = '1'

      }
      else if (window.scrollY < 150){
        toTop.style.opacity = '0';
        toTop.style.visibility = 'hidden';
      }
      colorDetect();
    }
    else{
      return false;
    }
  });
  document.querySelector("#to-top").addEventListener("click", function(){
    window.scrollTo({top:0,behavior:'smooth'}); // Not supported on Safari or IE
  });

  document.querySelector('.self-portrait').addEventListener("mouseover", function(){
    document.querySelector('.caption').style.opacity = '1';
  });
  document.querySelector('.self-portrait').addEventListener("mouseout", function(){
    document.querySelector('.caption').style.opacity = '0';
  });

});

function colorDetect(){
  var accentColor = 'rgba(40,	210,	150, 0.8)'
  var mainColor = 'rgba(55, 63, 81, 0.8)'
  var toTopButton = document.querySelector('#to-top');
  var toTop = document.querySelector('#to-top').getBoundingClientRect().top;
  var projects = document.querySelector(".projects").getBoundingClientRect().top;
  var work = document.querySelector(".workDivider").getBoundingClientRect().top;
  var contact = document.querySelector(".contact").getBoundingClientRect().top;

  if(toTop > projects){
    toTopButton.style.backgroundColor = mainColor;
  }
  else if(toTop < projects){
    toTopButton.style.backgroundColor = accentColor;
  }
  if(toTop > work){
    toTopButton.style.backgroundColor = accentColor;
  }
  if(toTop > contact){
    toTopButton.style.backgroundColor = mainColor;
  }
}
