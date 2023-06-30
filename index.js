// Balloon state
var balloonSize = 0; // Initial size of the balloon
var balloonFlying = false; // Flag to track if balloon is flying
var balloonInterval; // Interval for balloon flying animation

// Balloon colors
// var balloonColors = ['red', 'blue', 'green', 'yellow', 'purple','lightblue','darkorange','lightorange']; // Array of balloon colors
var currentColorIndex = 0; // Index of the current balloon color

// Get the balloon and pump handle elements
var balloon = document.getElementById('balloon');
balloon.style.right = '340px';
balloon.style.bottom = '180px';
const pumpHandle = document.getElementById('i1');
const pumpBody = document.getElementById('i3');
const pumpSide = document.getElementById('i2');

// Add a click event listener to the pump handle
pumpHandle.addEventListener('click', function () {
    balloon.style.visibility = 'visible';
    balloon.style.position = 'absolute';
    balloon.style.right = '340px';
    balloon.style.bottom = '180px';
    balloon.style.zIndex = '10';

    var bol = true;
    if (bol == true) {
        pumpBody.style.zIndex = 2;
        pumpHandle.style.zIndex = 1;
        pumpHandle.style.bottom = '180px';
        pumpHandle.style.right = '42px';
        pumpBody.style.width = '205px';
        pumpSide.style.right = '217.5px'
        // var balloon = "Symbol1000"+i+".png"



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
        // Inflate the balloon by increasing its size
        balloonSize += 30;
        var r = 350 - balloonSize / 2;
        // var b=210 - balloonSize;

        balloon.style.right = r + 'px';
        // balloon.style.bottom = b+'px';
        // balloon.style.position = 'fixed';
        balloon.style.width = balloonSize + 'px';
        balloon.style.height = balloonSize + 'px';


        // Check if balloon is fully inflated
        if (balloonSize >= 120) {
            startBalloonFlying();
        }
    }
});

// Add a click event listener to the balloon
balloon.addEventListener('click', function () {
    if (balloonFlying) {
        burstBalloon();
    }
});

// Function to start the balloon flying animation
function startBalloonFlying() {
    balloonFlying = true;

    // Set initial position of the balloon
    var currentLeft = 320; // Adjust the horizontal position as needed
    var currentTop = 180; // Adjust the vertical position as needed

    // Set an interval for the balloon flying animation
    balloonInterval = setInterval(function () {
        // Calculate random Y velocity for vertical balloon movement
        var velocityY = Math.floor(Math.random() * 15) - 5;
        var velocityX = Math.floor(Math.random() * 21) - 5;

        // Update balloon position based on velocities
        currentLeft += velocityX; // Gradually decrement the horizontal position
        currentTop += velocityY;

        // Limit the balloon's position within the viewport
        var viewportWidth = window.innerWidth;
        var viewportHeight = window.innerHeight;
        var balloonWidth = balloon.offsetWidth;
        var balloonHeight = balloon.offsetHeight;

        // Check if the balloon exceeds the left or right boundaries
        if (currentLeft < 0) {
            currentLeft = 0;
        } else if (currentLeft + balloonWidth > viewportWidth) {
            currentLeft = viewportWidth - balloonWidth - 50;
        }

        // Check if the balloon exceeds the top or bottom boundaries
        if (currentTop < 0) {
            currentTop = 0;
        } else if (currentTop + balloonHeight > viewportHeight) {
            currentTop = viewportHeight - balloonHeight - 50;
        }

        balloon.style.right = currentLeft + 'px';
        balloon.style.bottom = currentTop + 'px';
    }, 100);
}




// Function to burst the balloon
function burstBalloon() {
    clearInterval(balloonInterval); // Clear the balloon flying interval
    balloonFlying = false;

    // Reset balloon size and position
    balloonSize = 0;
    balloon.style.width = balloonSize + 'px';
    balloon.style.height = balloonSize + 'px';
    balloon.style.left = '0';
    balloon.style.top = '0';

    // Change balloon color
    currentColorIndex = (currentColorIndex + 1) % 10;
    //   var balloonColor = balloonColors[currentColorIndex];
    var balloonImage = "Symbol 10000" + currentColorIndex + '.png';
    balloon.src = balloonImage;
}





