/**
 
 ** Exercise 5: The cat walk **
 Starting with an HTML, which has a single img tag of an animated GIF of a cat walking.

 1. Create a variable to store a reference to the img.
 2. Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
 3. Create a  function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
 4. Call that function every 50 milliseconds.Your cat should now be moving across the screen from left to right.Hurrah!
 5. When the cat reaches the right - hand of the screen, restart them at the left hand side("0px").So they should keep walking from left to right across the screen, forever and ever.
 6. When the cat reaches the middle of the screen, replace the img with an image of a cat dancing(use this URL: https: //tenor.com/StFI.gif), keep it dancing for 5 seconds, and then replace the img with the original image and have it continue the walk.
 
*/

setInterval(catWalk, 50);

// the function
function catWalk() {
  let cat = document.querySelector('img');
  let currentWidth = window.innerWidth; // to read and store the current screen width//
  let imageWidth = cat.offsetWidth;
  let cond = (currentWidth - 296) / 2; //the middle of the screen//
  document.body.style.overflow = 'hidden'; // for smooth disappearing//
  cat.style.borderBottom = '2px inset lightgrey'; //as a shadow//

  let currentLeft = getComputedStyle(cat).left; // to store the current left//
  currentLeft = parseInt(currentLeft) + 10; // to increase the left 10pxs//
  cat.style.left = currentLeft + 'px';
  // cat.style.transition = "display 1s";

  // dancing cat//
  if (currentLeft >= cond - 8 && currentLeft <= cond + 8) {
    cat.style.display = 'none'; // to hide the walking cat//
    let newDiv = document.createElement('div');
    let newImg = document.createElement('img');
    newImg.src = 'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
    newDiv.appendChild(newImg);
    document.body.appendChild(newDiv);

    newDiv.style.margin = 'auto';
    newDiv.style.textAlign = 'center';
    newImg.style.position = 'absolute';
    newImg.style.left = currentLeft + 'px';

    // when the dance over
    setTimeout(() => {
      cat.style.display = 'block';
      cat.style.left = currentWidth / 2 + 'px';
      newDiv.parentNode.removeChild(newDiv);
    }, 5500);
  }
  // when the cat reached end of the screen
  if (currentLeft >= currentWidth) {
    cat.style.left = '-296px';
  }
}
