
"use strict";

// W10C - JavaScript Event Listeners Assignment


// EVENT 1: CLICK
// Change a message when the user clicks a button.

const clickButton = document.getElementById("click-button");
const clickMessage = document.getElementById("click-message");

clickButton.addEventListener("click", function() {
    clickMessage.innerText = "You clicked the button!";
    clickMessage.style.color = "green";
});


// EVENT 2: DOUBLE CLICK
// Change the text and color after a double click.

const doubleButton = document.getElementById("double-button");
const doubleMessage = document.getElementById("double-message");

doubleButton.addEventListener("dblclick", function() {
    doubleMessage.innerText = "You double-clicked!";
    doubleMessage.style.color = "blue";
});


// EVENT 3: MOUSE HOVER
// Change the background while the mouse is over the box.

const hoverBox = document.getElementById("hover-box");
const hoverMessage = document.getElementById("hover-message");

hoverBox.addEventListener("mouseenter", function() {
    hoverBox.style.backgroundColor = "lightgreen";
    hoverMessage.innerText = "Your mouse is over the box!";
});

// Restore the original appearance when the mouse leaves.

hoverBox.addEventListener("mouseleave", function() {
    hoverBox.style.backgroundColor = "white";
    hoverMessage.innerText = "Move your mouse here!";
});


// EVENT 4: SPACE KEY
// Listen for keyboard events on the body.

const spaceMessage = document.getElementById("space-message");

document.body.addEventListener("keydown", function(event) {
    if (event.code === "Space") {

        // Prevent the page from scrolling.
        event.preventDefault();

        spaceMessage.innerText = "You pressed SPACE!";
        spaceMessage.style.color = "purple";
        spaceMessage.style.fontWeight = "bold";
    }
});


// BONUS 1: setTimeout()
// Change the page background after 15 seconds.

setTimeout(function() {
    document.body.style.backgroundColor = "lightblue";
}, 15000);


// BONUS 2: setInterval()
// Move the orange box randomly every 3 seconds.

const movingBox = document.getElementById("moving-box");

setInterval(function() {

    // Generate random values between -100 and 100.
    const randomX = Math.floor(Math.random() * 201) - 100;
    const randomY = Math.floor(Math.random() * 201) - 100;

    // Move the box using CSS transform.
    movingBox.style.transform =
        `translate(${randomX}px, ${randomY}px)`;

}, 3000);


// BONUS 3: SECRET KEY CHALLENGE
// Detect all letters in "secret" in any order.
// The letter "e" must appear twice.
// Other keyboard keys are allowed between the letters.

// Store the required number of each letter.
const requiredLetters = {
    s: 1,
    e: 2,
    c: 1,
    r: 1,
    t: 1
};

// Count how many times each letter is pressed.
const typedLetters = {
    s: 0,
    e: 0,
    c: 0,
    r: 0,
    t: 0
};

// Prevent the message from appearing more than once.
let secretFound = false;

// Listen for keyboard presses anywhere on the page.
document.body.addEventListener("keydown", function(event) {

    // Convert capital letters to lowercase.
    const key = event.key.toLowerCase();

    // Only count letters needed for the secret.
    if (Object.hasOwn(requiredLetters, key)) {
        if (typedLetters[key] < requiredLetters[key]) {
            typedLetters[key]++;
        }
    }

    // Check whether all required letters have been entered.
    const allLettersFound = Object.keys(requiredLetters).every(
        function(letter) {
            return typedLetters[letter] >= requiredLetters[letter];
        }
    );

    // Display the message once all letters are found.
    if (allLettersFound && !secretFound) {

        secretFound = true;

        const secretMessage =
            document.getElementById("secret-message");

        // Create a new paragraph.
        const newParagraph = document.createElement("p");

        newParagraph.innerText = "You found the secret";
        newParagraph.style.color = "green";
        newParagraph.style.fontWeight = "bold";

        // Insert the paragraph onto the page.
        secretMessage.appendChild(newParagraph);
    }
});
