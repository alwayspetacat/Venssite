let text = document.getElementById('text');
let object7 = document.getElementById('object7');
let object1 = document.getElementById('object1');
let object4 = document.getElementById('object4');
let object5 = document.getElementById('object5');

let isScrolling = false;
let lastScrollPosition = 0;

window.addEventListener('scroll', () => {
    if (isScrolling) return; // exit if already scrolling
  
    isScrolling = true;
  
    let currentScrollPosition = window.scrollY;
  
    if (currentScrollPosition === lastScrollPosition) return; // exit if scroll position hasn't changed
  
    lastScrollPosition = currentScrollPosition;
  
    if (currentScrollPosition + window.innerHeight >= document.body.offsetHeight) {
      // user has reached the bottom of the page, prevent further scrolling
      window.scrollTo(0, document.body.offsetHeight - window.innerHeight);
      isScrolling = false;
      return;
    }
  
    requestAnimationFrame(() => {
      let value = window.scrollY;
  
      text.style.marginTop = value * 2.5 + 'px';
      mpoxbutton.style.marginTop = value * 2.5 + 'px';
      object3.style.marginLeft = value * -1.5 + 'px';
      object9.style.marginLeft = value * -1.5 + 'px';
      object11.style.marginLeft = value * -1.5 + 'px';
      object111.style.marginLeft = value * 1.4 + 'px';
      object14.style.marginLeft = value * 1.4 + 'px';
      object15.style.marginLeft = value * 1.3 + 'px';
      object16.style.marginLeft = value * 1.5 + 'px';
      object17.style.marginLeft = value * 1.2 + 'px';
      object18.style.marginLeft = value * 1.6 + 'px';
    
  
      isScrolling = false; // reset scrolling flag
    });
  });

