const text = document.getElementById("text");
const submitButton = document.getElementById("submitText");
const userInput = document.getElementById("userInput");

function applyTextEffect(content) {
    text.innerHTML = content.replace(/\S/g, "<span>$&</span>");

    const alphaSpan = document.querySelectorAll("span");
    alphaSpan.forEach(span => {
        span.addEventListener("mouseover", () => {
            span.classList.add("active");
        });
    });
}

applyTextEffect(text.textContent);

submitButton.addEventListener("click", () => {
    const inputText = userInput.value.trim();

    if (inputText) {
        applyTextEffect(inputText);
        userInput.value = '';
    } else {
        alert("Please enter some text!");
    }
});
