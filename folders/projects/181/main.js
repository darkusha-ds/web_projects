const scrollIndicator = document.getElementById('scrollIndicator');

window.addEventListener("scroll",()=>{

/* document.documentElement.scrollHeight - document.documentElement corresponds to the <html> tag, scrollHeight property returns the entire height (content + padding) of an element in px. */

// window.innerHeight - returns the viewport height

 const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

/* window.scrollY - scrollY property of the Window returns the number of pixels that the document is currently scrolled vertically. */
  
 const currentScrolled = window.scrollY;

 const scrollIndicatorWidth = Math.ceil( currentScrolled / scrollableHeight * 100 );

 scrollIndicator.style.width = `${scrollIndicatorWidth}%`;

})