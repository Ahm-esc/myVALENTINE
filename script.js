let noButtonTexts = ['Are you sure?', 'Think again!', 'Last chance!', 'Really?', 'Okay, if you insist...'];
let index = 0;

document.getElementById("noBtn").addEventListener("click", function() {
    // Make Yes Button Bigger
    let yesBtn = document.getElementById("yesBtn");
    let currentSize = parseInt(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentSize + 5) + "px";

    // Change No Button Text
    let noBtn = document.getElementById("noBtn");
    noBtn.innerText = noButtonTexts[index];
    index = (index + 1) % noButtonTexts.length;

    // Add Animations
    yesBtn.classList.add("bounce");
    noBtn.classList.add("shake");

    setTimeout(() => {
        yesBtn.classList.remove("bounce");
        noBtn.classList.remove("shake");
    }, 500);
});

document.getElementById("yesBtn").addEventListener("click", function() {
    document.body.innerHTML = `
        <h1>Yay!🎉</h1>
        <h2> Kyay Zuu Tin Pr Tl<h2/>
       
    `;
});