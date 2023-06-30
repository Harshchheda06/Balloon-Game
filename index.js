var balloonSize = 0;
var balloonFlying = false;
var balloonInterval;
var balooncount = 0;
var currentColorIndex = 0;
var balloon = document.getElementById('balloon');
var alphabets = document.getElementById('alphabets');
balloon.style.right = '340px';
balloon.style.bottom = '180px';
// alphabets.style.right = '340px';
// alphabets.style.bottom = '180px';
const pumpHandle = document.getElementById('i1');
const pumpBody = document.getElementById('i3');
const pumpSide = document.getElementById('i2');


pumpHandle.addEventListener('click', function () {
    balloon.style.visibility = 'visible';
    balloon.style.position = 'absolute';
    balloon.style.right = '340px';
    balloon.style.bottom = '180px';
    balloon.style.zIndex = '10';

    // alphabets.style.visibility = 'visible';
    // alphabets.style.position = 'absolute';
    // alphabets.style.right = '340px';
    // alphabets.style.bottom = '180px';
    // alphabets.style.zIndex = '11';
    // alphabets.style.opacity='0.7'

    var bol = true;

    if (bol == true) {
        pumpBody.style.zIndex = 2;
        pumpHandle.style.zIndex = 1;
        pumpHandle.style.bottom = '180px';
        pumpHandle.style.right = '42px';
        pumpBody.style.width = '205px';
        pumpSide.style.right = '217.5px'
        bol = false;
    }

    setTimeout(() => {
        if (bol == false) {
            pumpBody.style.zIndex = 2;
            pumpHandle.style.zIndex = 1;
            pumpHandle.style.bottom = '232px';
            pumpHandle.style.right = '41px';
            pumpBody.style.width = '200px';
            pumpSide.style.right = '212.5px'
            bol = false;

        }
    }, 400)

    if (!balloonFlying) {

        balloonSize += 30;
        var r = 350 - balloonSize / 2;
        balloon.style.right = r + 'px';
        // balloon.style.bottom = b+'px';
        // balloon.style.position = 'fixed';
        // alphabets.style.width = balloonSize + 'px';
        // alphabets.style.height = balloonSize + 'px';
        balloon.style.width = balloonSize + 'px';
        balloon.style.height = balloonSize + 'px';

        if (balloonSize >= 120) {
            startBalloonFlying();

        }
    }
});




balloon.addEventListener('click', function () {
    if (balloonFlying) {
        burstBalloon();
    }
});


function startBalloonFlying() {
    balloonFlying = true;

    var currentLeft = 320;
    var currentTop = 180;

    balloonInterval = setInterval(function () {

        var velocityY = Math.floor(Math.random() * 15) - 5;
        var velocityX = Math.floor(Math.random() * 21) - 5;

        currentLeft += velocityX;
        currentTop += velocityY;

        var viewportWidth = window.innerWidth;
        var viewportHeight = window.innerHeight;
        var balloonWidth = balloon.offsetWidth;
        var balloonHeight = balloon.offsetHeight;

        if (currentLeft < 0) {
            currentLeft = 0;
        } else if (currentLeft + balloonWidth > viewportWidth) {
            currentLeft = viewportWidth - balloonWidth - 50;
        }

        if (currentTop < 0) {
            currentTop = 0;
        } else if (currentTop + balloonHeight > viewportHeight) {
            currentTop = viewportHeight - balloonHeight - 50;
        }

        balloon.style.right = currentLeft + 'px';
        balloon.style.bottom = currentTop + 'px';
    }, 100);
}



function burstBalloon() {
    clearInterval(balloonInterval);
    balloonFlying = false;
    balloonSize = 0;
    balloon.style.width = balloonSize + 'px';
    balloon.style.height = balloonSize + 'px';
    changeColor();


}

function changeColor() {
    currentColorIndex = (currentColorIndex + 1) % 10;
    var balloonImage = "Symbol 10000" + currentColorIndex + '.png';
    balloon.src = balloonImage;
    return balloon;
}


  



