//add and remove active class to the clicked element
const colors = document.querySelectorAll('.color__box');
colors.forEach(item =>{ 
  item.addEventListener('click', (e) =>{
  colors.forEach(el=>{ el.removeAttribute('id'); });
  item.setAttribute('id', 'color-active')
  });
})

//creat variable for storage color value
let currentColor = "";

//get background-color value from the clicked element and add it to curretColor variable
document.getElementById('color-box').onclick = function() {
  let colorActive = document.getElementById('color-active');
  let style = getComputedStyle(colorActive);
  currentColor = style.backgroundColor;
  console.log(currentColor);
};
