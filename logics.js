let message = `Oii ! ayto mor personal website, tume mula Instagram ot message kore chet to delete kore deba. aru pesot mor website to check koreba moy update kore thom ok? mor message or notification gola ha problem hoi..moy akol seen kore thoi dem..ok? Aru ay website to balag ata password asa "848612" ayto use koreba kunubi check korela ok?? tumak eman miss koresu..parela deba message ata..🥺, moy balag try kore asu khale atea anaka kam bonabo lagebo aru🥺..upi ni..`;

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
