// window.onload = choosePic1;
//window.onload = choosePic2;
//window.onload = choosePic3;


var imagesArray = ["bagWeek3.jpg ", "banana.jpg ", "boots.jpg", "chair.jpg", "cthulhu.jpg", "dragon.jpg", "pen.jpg", "scissors.jpg", "shark.jpg", "sweep.png", "unicorn.jpg", "usb.gif", "water-can.jpg", "wine-glass.jpg"];

function choosePic1() {
     var randomNum = Math.floor(Math.random() * imagesArray.length);
     document.getElementById("firstImage").src= 'week-3Assets/' + imagesArray[randomNum];
   }

   function choosePic2() {
        var randomNum = Math.floor(Math.random() * imagesArray.length);
        document.getElementById("secondImage").src= 'week-3Assets/' + imagesArray[randomNum];
      }

      function choosePic3() {
           var randomNum = Math.floor(Math.random() * imagesArray.length);
           document.getElementById("thirdImage").src= 'week-3Assets/' + imagesArray[randomNum];
         }

         choosePic3();
         choosePic2();
         choosePic1();










// var first = document.getElementById('image1');
// var second = document.getElementById('image2');
// var third = document.getElementById('image3');
//
// first.addEventListener('click', handleClickOnFirst);
// second.addEventListener('click', handleClickOnSecond);
// third.addEventListener('click', handleClickOnThird);
//
// var firstClicks = 0;
// var secondClicks = 0;
// var thirdClicks = 0;
//
// function handleClickOnFirst() {
//   firstClicks++;
//   first.textContent = 'First was clicked ' + firstClicks + ' times';
//   if (firstClicks % 3 === 0) {
//     first.textContent = 'I AM DIVISIBLE BY 3!';
//   }
// }
//
// function handleClickOnSecond() {
//   secondClicks += 1;
//   second.textContent = 'Second was clicked ' + secondClicks + ' times';
// }
//
// function handleClickOnThird() {
//   thirdClicks += 1;
//   third.textContent = 'Third was clicked ' + thirdClicks + ' times';
// }
