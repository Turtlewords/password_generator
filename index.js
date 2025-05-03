const passwordEl = document.getElementById("password-el")
const generateBtn = document.querySelector("#generate-btn");
const generateImgBtn = document.querySelector("#generate-btn-img");
const charRange = document.querySelector("#char-range");
const charCount = document.querySelector("#char-count");
const copy = document.querySelector("#copy");
const copied = document.querySelector("#copied");
const strengthText = document.querySelector("#strength-text");

const lower = 'abcdefghijklmnopqrstuvwxyz'.split('');
const upper = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
const numbers = '0123456789'.split('');
const symbols = "`~!@#$%^&*()-_+=,<.>/?;:".split('');

const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
const bars = document.querySelectorAll(".bars");

copy.addEventListener("click", copyToClipboard);

generateBtn.addEventListener("click", function(e) {
    
    e.preventDefault();
    generatePassword()
    generateBtnHoverStyle()
});

generateBtn.addEventListener("mouseover", () => {
    generateImgBtn.src = "/assets/images/arrow-active.svg";
})

generateBtn.addEventListener("mouseout", () => {
    generateImgBtn.src = "/assets/images/icon-arrow-right.svg";
})


charRange.addEventListener("change", updateCharacterLength);



function copyToClipboard() {
   
    copied.style.visibility = "visible";
    setTimeout(() => {
        copied.style.visibility = "hidden";
    },4000)
    navigator.clipboard.writeText(passwordEl.textContent);
    
}

function updateCharacterLength() {
    charCount.textContent = charRange.value;
}


function passwordIsTooWeak() {
    strengthText.textContent = "TOO WEAK!";
    bars[0].style.outlineColor = "#F64A4A";
    bars[0].style.backgroundColor = "#F64A4A"
}

function passwordIsWeak() {
    strengthText.textContent = "WEAK";
    for (let i = 0; i < bars.length - 2; i++) {
        bars[i].style.outlineColor = "#FB7C58";
        bars[i].style.backgroundColor = "#FB7C58"
    }
}

function passwordIsMedium() {
    strengthText.textContent = "MEDIUM";
    for (let i = 0; i < bars.length - 1; i++) {
        bars[i].style.outlineColor = "#F8CD65";
        bars[i].style.backgroundColor = "#F8CD65"
    }
}

function passwordIsStrong() {
    strengthText.textContent = "STRONG";
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.outlineColor = "#A4FFAF";
        bars[i].style.backgroundColor = "#A4FFAF"
    }
}

function generateBtnHoverStyle() {
    generateImgBtn.src = "/assets/images/arrow-active.svg";
}

function generateRandom(max) {
    return Math.floor(Math.random() * max);
}


// write function to determine password strength

function generatePassword() {
    let passwordLen = charRange.value;
    let password = "";

    let charSet = [];
    if (checkBoxes[0].checked) {
        charSet.push(...lower);
    }
    if (checkBoxes[1].checked) {
        charSet.push(...upper);
    }
    if (checkBoxes[2].checked) {
        charSet.push(...numbers);
    }
    if (checkBoxes[3].checked) {
        charSet.push(...symbols);
    }
    
    let len = charSet.length;

    if (len < 1) {
        alert("Please check at least one box");
        return;
    }

    for (let i = 0; i < passwordLen; i++) {
        let index = generateRandom(len);
        password += charSet[index];
    }

    passwordEl.textContent = password;
}




