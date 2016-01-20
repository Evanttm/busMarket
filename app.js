'use strict'

var imagesArray = [];

function Image(productName, filePath) {
this.name = productName;
this.filePath = filePath;
this.numClicks = 0;
imagesArray.push(this);
}

var bagImage = new Image('bag','bagWeek3.jpg');
var bananaImage = new Image('banana', 'banana.jpg');
var bootsImage = new Image('boots', 'boots.jpg');
var chairImage = new Image('chair', 'chair.jpg');
var cthulhuImage = new Image('cthulhu', 'cthulhu.jpg');
var dragonImage = new Image('dragon', 'dragon.jpg');
var penImage = new Image('pen', 'pen.jpg');
var scissorsImage = new Image('scissors', 'scissors.jpg');
var sharkImage = new Image('shark', 'shark.jpg');
var sweepImage = new Image('sweep', 'sweep.png');
var unicornImage = new Image('unicorn', 'unicorn.jpg');
var usbImage = new Image('usb', 'usb.gif');
var water_canImage = new Image('water_can', 'water-can.jpg');
var wine_glassImage = new Image('wine_glass', 'wine-glass.jpg');



var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');
var image3 = document.getElementById('image3');
var randomNumber1 = 0;
var randomNumber2 = 0;
var randomNumber3 = 0;

function getRandomImage1() {
 randomNumber1 = Math.floor(Math.random() * imagesArray.length);
 document.getElementById('image1').src= 'week-3Assets/' + imagesArray[randomNumber1].filePath;


 }
function getRandomImage2() {
 randomNumber2 = Math.floor(Math.random() * imagesArray.length);
 document.getElementById('image2').src= 'week-3Assets/' + imagesArray[randomNumber2].filePath;
 }
function getRandomImage3() {
 randomNumber3 = Math.floor(Math.random() * imagesArray.length);
 document.getElementById('image3').src= 'week-3Assets/' + imagesArray[randomNumber3].filePath;
 }

   image1.addEventListener('click', handleClickOnFirst);
   image2.addEventListener('click', handleClickOnSecond);
   image3.addEventListener('click', handleClickOnThird);

   var image1Clicks = 0;
   var image2Clicks = 0;
   var image3Clicks = 0;

   function handleClickOnFirst() {
     imagesArray[randomNumber1].numClicks += 1;
      console.log('handleClickOnFirst');
     getRandomImage1();
     getRandomImage2();
     getRandomImage3();
     while (image1.src === image2.src || image2.src === image3.src || image1.src === image3.src) {
         console.log('duplicates prevented');
         getRandomImage1();
         getRandomImage2();
         getRandomImage3();
     };
    }
   function handleClickOnSecond() {
     imagesArray[randomNumber2].numClicks += 1;
     console.log('handleClickOnSecond');
     getRandomImage1();
     getRandomImage2();
     getRandomImage3();
     while (image1.src === image2.src || image2.src === image3.src || image1.src === image3.src) {
         console.log('duplicates prevented');
         getRandomImage1();
         getRandomImage2();
         getRandomImage3();
     };
   }


   function handleClickOnThird() {
     imagesArray[randomNumber3].numClicks += 1;
      console.log('handleClickOnThird');
     getRandomImage1();
     getRandomImage2();
     getRandomImage3();
     while (image1.src === image2.src || image2.src === image3.src || image1.src === image3.src) {
         console.log('duplicates prevented');
         getRandomImage1();
         getRandomImage2();
         getRandomImage3();
     };

   }

   getRandomImage1();
   getRandomImage2();
   getRandomImage3();
