let speedTypingTestEl = document.getElementById("speedTypingTest");
let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let resultEl = document.getElementById("result");
let quoteInputEl = document.getElementById("quoteInput");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let spinnerEl = document.getElementById("spinner");
let url = "https://apis.ccbp.in/random-quote";
resultEl.textContent = "";
let options = {
    method: "GET",
};
fetch("https://apis.ccbp.in/random-quote", options)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        let y = jsonData.content;
        console.log(y);
        quoteDisplayEl.textContent = y;
    });
let count = 0;


let timer = setInterval(function() {
    timerEl.classList.add('para');
    timerEl.textContent = count;

    count = count + 1;
}, 1000);

submitBtnEl.addEventListener("click", function() {
    console.log(quoteInputEl.value);
    if (quoteInputEl.value === quoteDisplayEl.textContent) {
        clearInterval(timer);
        resultEl.textContent = "your typed correct message";

    } else {
        resultEl.textContent = "your typed incorrect message";

    }

});
resetBtnEl.addEventListener("click", function() {
    quoteDisplayEl.value = "";
    spinnerEl.classList.remove("d-none");

    let option = {
        method: "GET",
    };
    fetch(url, option)
        .then(function(response) {
            spinnerEl.classList.add("d-none");
            return response.json();
        })
        .then(function(jsonData) {
            let y = jsonData.content;
            console.log(y);
            quoteDisplayEl.textContent = y;

        });

    timerEl.textContent = 0;
    quoteInputEl.value = "";
});