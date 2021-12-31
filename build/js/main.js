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


//assign a color to the element by clicking + add "reset" button
const areaForColoring = document.querySelectorAll('.areaForColoring');
const resetBtn = document.getElementById('resetBtn');
areaForColoring.forEach( (element) => {
  element.addEventListener('click', (e) =>{
    element.style.fill = currentColor;
    resetBtn.style.visibility = "visible";
    resetBtn.style.opacity = "0.7";
  });
})


//reset colors
resetBtn.addEventListener('click', (e) =>{
    window.location.reload();
    console.log(reset)
})