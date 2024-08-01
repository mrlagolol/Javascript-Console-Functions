// When you paste this code, find a discord message you want to change the content of and copy the message id
// Then use the changeMessage() function inside of the developer tools console

function changeMessage(messageID, content) {
    document.getElementById(`message-content-${messageID}`).innerHTML = content
}
