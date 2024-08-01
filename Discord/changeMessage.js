// First open your developer tools (Ctrl + Shift + I for Windows | Option + Command + I for MacOS) and navagate to the console tab and copy and paste the function below
// When you paste this code, find a discord message you want to change the content of and copy the message id -> https://semicolon.dev/discord/how-to-copy-message-id-on-discord-get-message-id
// Then use the changeMessage() function inside of the developer tools console. Put in the message id and then the content you want.
// Remember when you reload or refresh your page you do need to run this function again

function changeMessage(messageID, content) {
    document.getElementById(`message-content-${messageID}`).innerHTML = content
}
