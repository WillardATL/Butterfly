//add and remove active class to the clicked element
const colors = document.querySelectorAll('.color__box');
colors.forEach(item =>{ 
  item.addEventListener('click', (e) =>{
  colors.forEach(el=>{ el.removeAttribute('id'); });
  item.setAttribute('id', 'color-active')
  });
})

//creat variable for storage color value
let currentColor = '#ffff';

//get background-color value from the clicked element and add it to curretColor variable
document.getElementById('color-box').onclick = function() {
  let colorActive = document.getElementById('color-active');
  let style = getComputedStyle(colorActive);
  currentColor = style.backgroundColor;
  console.log(currentColor);
};

let leftWing = document.getElementById('leftWing');
let leftWingSmallDot = document.getElementById('leftWingSmallDot');
let leftWingBigDot = document.getElementById('leftWingBigDot');
let rightWing = document.getElementById('rightWing');
let rightWingSmallDot = document.getElementById('rightWingSmallDot');
let rightWingBigDot = document.getElementById('rightWingBigDot');
let centerBody = document.getElementById('centerBody');
let leftAntenna = document.getElementById('leftAntenna');
let rightAntenna = document.getElementById('rightAntenna');

leftWing.onclick = function() {
  leftWing.style.fill = currentColor;
}
leftWingSmallDot.onclick = function() {
  leftWingSmallDot.style.fill = currentColor;
}
leftWingBigDot.onclick = function() {
  leftWingBigDot.style.fill = currentColor;
}
rightWing.onclick = function() {
  rightWing.style.fill = currentColor;
}
rightWingSmallDot.onclick = function() {
  rightWingSmallDot.style.fill = currentColor;
}
rightWingBigDot.onclick = function() {
  rightWingBigDot.style.fill = currentColor;
}
centerBody.onclick = function() {
  centerBody.style.fill = currentColor;
}
leftAntenna.onclick = function() {
  leftAntenna.style.fill = currentColor;
}
rightAntenna.onclick = function() {
  rightAntenna.style.fill = currentColor;
}