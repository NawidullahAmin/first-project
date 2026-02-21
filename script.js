// Select Elements
const userInput = document.getElementById("num");
const btn = document.getElementById("btn");
const result = document.querySelector(".result");

// Create the runMultiplier Function
const runMultiplier = (userInput) => {
    result.innerHTML = "";
    // Use for loop to multiply a number from 1 to 10 by the user's input number
    for(let i = 1; i <= 10; i++){
        const col = document.createElement("div");
        col.classList.add("col");
        col.innerHTML = `
            <div class="num">${i}</div>
            <div class="times">&times;</div>
            <div class="multi">${userInput}</div>
            <div class="equal">&equals;</div>
            <div class="output">${i * userInput}</div>
        `;
        // Add smooth animation to each row of the project
        col.style.animationDelay = `${i * 0.2}s`;
        result.appendChild(col);
    }
}

// Add an event listener to the btn Run
btn.addEventListener("click", (e) => {
    e.preventDefault();
    const inputValue = Number(userInput.value);
    if(!inputValue || inputValue < 1) return;
    runMultiplier(inputValue);
    userInput.value = "";
});

btn.disabled = true;

// When a user presses the ENTER key, the run btn is fired.
userInput.addEventListener("input", () => {
    btn.disabled = !userInput.value;
});