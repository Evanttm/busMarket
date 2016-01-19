//-----------------------Creating Array----------------------------------------
var imagesArray = ["bagWeek3.jpg ", "banana.jpg ", "boots.jpg", "chair.jpg", "cthulhu.jpg", "dragon.jpg", "pen.jpg", "scissors.jpg", "shark.jpg", "sweep.png", "unicorn.jpg", "usb.gif", "water-can.jpg", "wine-glass.jpg"];
//----------------------------Declairing Functions-----------------------------
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
//--------------Calling Functions choosePic -1 -2 -3 ---------------------------
         choosePic3();
         choosePic2();
         choosePic1();
//--------------------------------Click Event handler---------------------------
         var first = document.getElementById('firstImage');
         var second = document.getElementById('secondImage');
         var third = document.getElementById('thirdImage');

         first.addEventListener('click', handleClickOnFirst);
         second.addEventListener('click', handleClickOnSecond);
         third.addEventListener('click', handleClickOnThird);

         var firstClicks = 0;
         var secondClicks = 0;
         var thirdClicks = 0;
//--------------Declairing functions for event handler--------------------------
         function handleClickOnFirst() {
           firstClicks++;
           first.textContent = 'First was clicked ' + firstClicks + ' times';
           console.log('firstClicks')
         }


         function handleClickOnSecond() {
           secondClicks += 1;
           //second.textContent = 'Second was clicked ' + secondClicks + ' times';
           console.log('secondClicks');
         }

         function handleClickOnThird() {
           thirdClicks += 1;
           third.textContent = 'Third was clicked ' + thirdClicks + ' times';
           console.log('thirdClicks');
         }
         var totalClicks = ['firstClicks', 'secondClicks', 'thirdClicks'];

//------------------------------------------------------------------------------

        //  var usedImages = {};
        //  var usedImagesCount = 0;
        //   if (!usedImages[randomNum]){
        //       document.getElementById("firstImage").src= 'week-3Assets/' + imagesArray[randomNum];
        //       usedImagesCount++;
        //       if (usedImagesCount === imagesArray.length){
        //           usedImagesCount = 0;
        //           usedImages = {};
        //       }
        //   } else {
        //       displayImage();
        //   }


//--------------------Prevents the repeat of images-----------------------------

while (firstImage.src  === secondImage.src || secondImage.src === thirdImage.src || thirdImage.src === firstImage.src) {

    choosePic1();
    choosePic2();
    choosePic3();
 }
//
//
//
//
//
// var alreadyShown =[]
// if(alreadyShown){
//   re-roll
// }
//
//
