/**
  In this week 's project you'll be making a Pomodoro Clock!
  A user can specify how many minutes the timer should be set, and with a click on the play button it starts counting down!If the user wants to pause the timer, they can do so by clicking the pause button.

  If the timer is running, the user can 't change the session length anymore
  Use at least 3 functions
  Display minutes and seconds
  If the timer finishes the timer should be replaced by the message: Time 's up!
 * 
 */

// general style
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.boxSizing = 'border-box';
document.body.style.minHeight = '100%';

let app = document.getElementById('app');
app.style.backgroundColor = '#1e555c';
app.style.fontFamily = 'Segoe UI';
app.style.color = 'white';
app.style.textAlign = 'center';
app.style.padding = '0 2rem';

// create h1//
let h1 = document.createElement('h1');
h1.style.fontSize = '5rem';
h1.innerHTML = 'Pomodoro Clock';
app.appendChild(h1);

// create h2
let h2 = document.createElement('h2');
h2.style.fontSize = '3rem';
h2.innerHTML = 'Session Length';
// h2.style.border = '2px solid green';
app.appendChild(h2);

// create  session container//
let sessionLength = document.createElement('div');
sessionLength.style.display = 'flex';
sessionLength.style.justifyContent = 'center';
sessionLength.style.fontSize = '3rem';
sessionLength.style.fontWeight = 'bold';
// sessionLength.style.border = '2px solid red';
app.appendChild(sessionLength);

//create decrease counter botton
let decreaseB = document.createElement('button');
decreaseB.innerHTML = '&#x2B07;';
decreaseB.style.cursor = 'pointer';
decreaseB.style.backgroundColor = '#1e555c';
decreaseB.style.border = 'none';
decreaseB.style.color = 'white';
decreaseB.style.fontSize = '3rem';
decreaseB.style.outlineStyle = 'none';
sessionLength.appendChild(decreaseB);

// create the counter screen
let sLength = document.createElement('p');
sLength.innerHTML = '1';
sLength.style.padding = '0 2rem';
sLength.style.width = '4rem';
sessionLength.appendChild(sLength);

// create increase counter botton
let increaseB = document.createElement('button');
increaseB.innerHTML = '&#x2B06;';
increaseB.style.cursor = 'pointer';
increaseB.style.backgroundColor = '#1e555c';
increaseB.style.border = 'none';
increaseB.style.color = 'white';
increaseB.style.fontSize = '3rem';
increaseB.style.outlineStyle = 'none';
sessionLength.appendChild(increaseB);

// create counter container
let session = document.createElement('div');
session.style.border = '8px solid #14363A';
session.style.borderRadius = '50px';
session.style.maxWidth = '50%';
session.style.margin = 'auto';
session.style.fontSize = '3rem';
session.style.lineHeight = '1rem';
app.appendChild(session);

// create the title of the counter
let pSession = document.createElement('p');
pSession.innerHTML = 'Session';
session.appendChild(pSession);

let counter = document.createElement('div');
counter.style.display = 'flex';
counter.style.justifyContent = 'center';
session.appendChild(counter);
// create the counter minutes
let counterM = document.createElement('p');
counterM.innerHTML = sLength.innerHTML;
counterM.style.fontSize = '6rem';
counterM.style.fontFamily = "'Segment7Standard'";
counter.appendChild(counterM);

//create colon
let colon = document.createElement('p');
colon.innerHTML = ':';
colon.style.fontSize = '5.5rem';
// colon.style.fontFamily = "'Segment7Standard'";
counter.appendChild(colon);

// create the counter Seconds
let counterS = document.createElement('p');
counterS.innerHTML = '00';
counterS.style.fontSize = '6rem';
counterS.style.fontFamily = "'Segment7Standard'";
counter.appendChild(counterS);

// create the control container
let control = document.createElement('div');
app.appendChild(control);
control.style.display = 'flex';
control.style.justifyContent = 'center';

// create play botton
let play = document.createElement('p');
play.innerHTML = '&#9654';
play.style.padding = ' 1rem';
play.style.cursor = 'pointer';
control.appendChild(play);

// create pause botton
let pause = document.createElement('button');
pause.innerHTML = '||';
pause.style.padding = ' 1rem';
pause.style.cursor = 'pointer';
pause.style.backgroundColor = '#1e555c';
pause.style.border = 'none';
pause.style.color = 'white';
pause.style.fontSize = '1.5rem';
pause.style.outlineStyle = 'none';
pause.style.fontStyle = 'bolder';
pause.disabled = true;
control.appendChild(pause);

// function of increasing counter
increaseB.addEventListener('click', () => {
  let dur = sLength.innerHTML;
  dur++;
  if (dur > 0) {
    sLength.innerHTML = dur;
    counterM.innerHTML = dur;
    counterS.innerHTML = '00';
    colon.innerHTML = ':';
    colon.style.fontSize = '5.5rem';
    decreaseB.disabled = false;
  } else {
    dur++;
    sLength.innerHTML = dur;
    counterM.innerHTML = dur;
  }
});

// function of decreasing counter
decreaseB.addEventListener('click', () => {
  let dur = sLength.innerHTML;
  dur--;
  if (dur == 0) {
    colon.innerHTML = 'Time is up!';
    colon.style.fontSize = '3rem';
    counterM.innerHTML = '';
    counterS.innerHTML = '';
    sLength.innerHTML = dur;
    decreaseB.disabled = true;
  } else {
    sLength.innerHTML = dur;
    counterM.innerHTML = dur;
  }
});
let flag;
let myTimer;
play.addEventListener('click', () => {
  flag = !flag;
  if (!flag) {
    increaseB.disabled = true;
    decreaseB.disabled = true;
    pause.disabled = false;
    play.innerHTML = '■';
    myTimer = setInterval(count, 1000);
  } else {
    play.innerHTML = '&#9654';
    let sl = sLength.innerHTML;
    counterM.innerHTML = sl;
    counterS.innerHTML = '00';
    colon.innerHTML = ':';
    increaseB.disabled = false;
    decreaseB.disabled = false;
    pause.disabled = true;
    clearInterval(myTimer);
  }
});
let flagP;
pause.addEventListener('click', () => {
  flagP = !flagP;
  if (!flagP) {
    increaseB.disabled = true;
    decreaseB.disabled = true;
    pause.style.color = 'grey';
    myTimer = setInterval(count, 1000);
  } else {
    clearInterval(myTimer);
  }
});

function count() {
  let ss = counterS.innerHTML;
  let mm = counterM.innerHTML;
  if (ss == 0) {
    if (mm == 0) {
      colon.innerHTML = 'Time is up!';
      colon.style.fontSize = '3rem';
      counterM.innerHTML = '';
      counterS.innerHTML = '';
      return clearInterval(myTimer);
    }
    ss = 59;
    mm--;
    counterS.innerHTML = ss;
    counterM.innerHTML = mm;
  } else {
    ss--;
    counterS.innerHTML = ss;
  }
}
