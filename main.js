const nav = document.getElementById('hambuger-menu')
const menu = document.getElementById('menu')

menu.addEventListener('click',(e)=>{
  nav.classList.toggle('active')
    if (nav.classList.contains('active')) {
    
        menu.innerHTML =`<svg id="menu" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path id="Path_1998" fill="var(---font-color)" data-name="Path 1998" d="M19,6.41,17.59,5,12,10.59,6.41,5,5,6.41,10.59,12,5,17.59,6.41,19,12,13.41,17.59,19,19,17.59,13.41,12Z"/>
        <path id="Path_1999" data-name="Path 1999" d="M0,0H24V24H0Z" fill="none"/>
      </svg>
      `
      menu.style.color= 'white'
      menu.style.zIndex= 100;   
    }
    else{
        menu.innerHTML =`<svg id="menu" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path id="Path_2012" data-name="Path 2012" d="M0,0H24V24H0Z" fill="none"/>
        <path id="Path_2013" data-name="Path 2013" fill='var(---font-color)' d="M3,18H21V16H3Zm0-5H21V11H3ZM3,6V8H21V6Z"/>
      </svg>`
      menu.style.color= 'white'
    }

    console.log(nav);
       
})

window.addEventListener('scroll', (() => {
  const stickyNav = document.getElementById('sticky');
  stickyNav.classList.toggle('sticky', window.scrollY )
  console.log('sticky')
}))

const countElements = document.querySelectorAll(".count");

// Function to animate the count from 0 to the specified target
function animateCount() {
    countElements.forEach((element) => {
        const target = parseInt(element.getAttribute("data-target"));
        let count = 0;
        const duration = 5000; // Animation duration in milliseconds
        const step = 50; // Time interval between each step

        const interval = setInterval(() => {
            element.textContent = count;
            count += Math.ceil(target / (duration / step));

            if (count >= target) {
                element.textContent = target+'+';
                clearInterval(interval);
            }
        }, step);
    });
}

// Call the animation function when the page loads
window.addEventListener("load", animateCount);