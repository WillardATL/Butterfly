//creat variable for color value
let currentColor = '#ff6666';

//choose the current color for coloring
const colors = document.querySelectorAll('.color__box');
colors.forEach(item => { 
  item.addEventListener('click', (e) =>{
  colors.forEach(el=>{ el.removeAttribute('id'); });
  item.setAttribute('id', 'color-active');
  currentColor = getComputedStyle(item).backgroundColor
  });
})


//assign a color to the element by clicking
const areaForColoring = document.querySelectorAll('.areaForColoring');
console.log(areaForColoring);
areaForColoring.forEach( (element) => {
  element.addEventListener('click', (e) =>{
    element.style.fill = currentColor;
    });
  })