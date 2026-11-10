
"use strict";

// W10C - JavaScript Event Listeners Assignment

// EVENT 1: SINGLE CLICK
const clickButton = document.getElementById("click-button");
const clickMessage = document.getElementById("click-message");

clickButton.addEventListener("click", function () {
    clickMessage.textContent = "You clicked the button!";
    clickMessage.style.color = "green";
});

// EVENT 2: DOUBLE CLICK
const doubleButton = document.getElementById("double-button");
const doubleMessage = document.getElementById("double-message");

doubleButton.addEventListener("dblclick", function () {
    doubleMessage.textContent = "You double-clicked!";
    doubleMessage.style.color = "blue";
});

// EVENT 3: MOUSE HOVER
const hoverBox = document.getElementById("hover-box");
const hoverMessage = document.getElementById("hover-message");

hoverBox.addEventListener("mouseenter", function () {
    hoverBox.style.backgroundColor = "lightgreen";
    hoverMessage.textContent = "Your mouse is over the box!";
});

hoverBox.addEventListener("mouseleave", function () {
    hoverBox.style.backgroundColor = "white";
    hoverMessage.textContent = "Move your mouse here!";
});

// EVENT 4: SPACE KEY
const spaceMessage = document.getElementById("space-message");

document.body.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
        event.preventDefault();
        spaceMessage.textContent = "You pressed SPACE!";
        spaceMessage.style.color = "purple";
        spaceMessage.style.fontWeight = "bold";
    }
});

// BONUS 1: CHANGE BACKGROUND AFTER 15 SECONDS
setTimeout(function () {
    document.body.style.backgroundColor = "peachpuff";

    document.getElementById("timer-message").textContent =
        "15 seconds passed! The background changed.";
}, 15000);

// BONUS 2: MOVE THE BOX EVERY 3 SECONDS
const movementArea = document.getElementById("movement-area");
const movingBox = document.getElementById("moving-box");

setInterval(function () {
    const maxX = Math.max(
        0,
        movementArea.clientWidth - movingBox.offsetWidth
    );

    const maxY = Math.max(
        0,
        movementArea.clientHeight - movingBox.offsetHeight
    );

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    movingBox.style.transform =
        `translate(${randomX}px, ${randomY}px)`;
}, 3000);

// BONUS 3: FIND ALL LETTERS OF "SECRET"
// Letters may be entered in any order.
// E must be pressed twice; other keys are ignored.

const remainingLetters = ["s", "e", "c", "r", "e", "t"];
let secretFound = false;

document.body.addEventListener("keydown", function (event) {
    if (secretFound || event.repeat) {
        return;
    }

    const pressedKey = event.key.toLowerCase();
    const letterIndex = remainingLetters.indexOf(pressedKey);

    if (letterIndex === -1) {
        return;
    }

    remainingLetters.splice(letterIndex, 1);

    if (remainingLetters.length === 0) {
        secretFound = true;

        const secretMessage = document.createElement("p");
        secretMessage.textContent = "You found the secret";
        secretMessage.style.backgroundColor = "gold";
        secretMessage.style.padding = "20px";
        secretMessage.style.fontWeight = "bold";

        document.getElementById("secret-message")
            .appendChild(secretMessage);
    }
});
