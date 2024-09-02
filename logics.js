let message = `Hallow ! Abhanish ....you have seen this messages `;

let mainMessage = `<h2>Message for you </h2><br>` + `<p>`+ message + `</p>`;

const mainPassword = 708626;
const securityPassword = 848612;
let privacy = "off";
let messageState = "hide";

const mainButton = document.querySelector("#main-button");
const morePrivacyButton = document.querySelector("#more-privacy-button");
const messageDiv = document.querySelector("#message-div");

function privacyCheck() {
    if(privacy === "off") {
        privacy = "on";
        morePrivacyButton.style.backgroundColor = "chartreuse";
        morePrivacyButton.innerHTML = "More privacy (ON)";
    }
    else {
        privacy = "off";
        morePrivacyButton.style.backgroundColor = "antiquewhite";
        morePrivacyButton.innerHTML = "More privacy (OFF)";
    }
}

function showMessage() {
    let enteredPassword = parseInt(prompt("Enter the password"));
    
    if(enteredPassword === mainPassword) {
        if(privacy === "off") {
            messageDiv.style.backgroundColor = "lightgoldenrodyellow";
            messageDiv.innerHTML = mainMessage;
            mainButton.innerHTML = "Done !";
        }
        else {
            messageState = "hide";
            alert(message);
        }
    }
    else if (enteredPassword === securityPassword) {
        messageState = "hide";
        window.location.href = "./defence.html";
    }
    else if(enteredPassword + 0 != enteredPassword) {
        alert("please enter the password to see the content !")
    }
    else {
        messageState = "hide";
        alert("Wrong password ! please try again.");
        return;
    }
}

morePrivacyButton.addEventListener("click", privacyCheck);

mainButton.addEventListener("click", () => {
    if(messageState === "hide") {
        messageState = "show";
        showMessage();
    }
    else {
        messageState = "hide";
        mainButton.innerHTML = "Show";
        messageDiv.innerHTML = " ";
        messageDiv.style.background = "none";
    }
});
