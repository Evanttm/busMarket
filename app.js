



var first = document.getElementById('first');
var second = document.getElementById('second');
var third = document.getElementById('third');

var firstClicks = 0;
var secondClicks = 0;
var thirdClicks = 0;



first.addEventListener('click', clickOnFirst);

function clickOnFirst() {
  firstClicks += 1;
  first.textContent =('First was clicked ' + firstClicks + 'times')
  if ( firstClicks % 3 === 0){
    first.textContent = 'I AM DIVISABLE BY 3!';
  }
}

second.addEventListener('click', clickOnFirst);

function clickOnFirst() {
  firstClicks += 1;
  second.textContent =('Second was clicked ' + firstClicks + 'times')
}

third.addEventListiner('click', clickOnFirst);

function clickOnFirst() {
  firstClicks += 1;
  third.textContent =('Third was clicked ' + firstClicks + 'times')
}
