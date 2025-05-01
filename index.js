const passwordEl = document.getElementById("password-el")
const generateBtn = document.querySelector("#generate-btn");
const charRange = document.querySelector("#char-range");
const charCount = document.querySelector("#char-count");
const checkBoxes = document.querySelectorAll('input[type="checkbox"]')
const copy = document.querySelector("#copy");
const copied = document.querySelector("#copied");

copy.addEventListener("click", copyToClipboard);

generateBtn.addEventListener("click", function(e) {
    
    e.preventDefault();
});

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







