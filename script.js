const messageForm = document.getElementById("messageForm");
const shareUrlContainer = document.getElementById("shareUrlContainer");
const userInputField = document.getElementById("userMessage");
const shareUrlField = document.getElementById("shareUrl");
const encodeButton = document.getElementById("encodeAndShare");
const copyButton = document.getElementById("copyUrl");
const createNewButton = document.getElementById("createNew");
const encodedMessageElement = document.getElementById("encodedMessage");

encodeButton.addEventListener("click", encodeAndShareMessage);
copyButton.addEventListener("click", copyUrl);
createNewButton.addEventListener("click", goHome);

window.addEventListener("DOMContentLoaded", displayMessageOrForm);

function encodeAndShareMessage() {
	const encodedMessage = btoa(userInputField.value);
	const currentUrl = window.location.href.split("#")[0];
	const shareUrl = `${currentUrl}#${encodedMessage}`;

	shareUrlField.value = shareUrl;
	messageForm.style.display = "none";
	shareUrlContainer.style.display = "flex";
}

function copyUrl() {
	navigator.clipboard.writeText(shareUrlField.value);
}

function goHome() {
	window.location.href = window.location.href.split("#")[0];
}

function displayMessageOrForm() {
	const encodedMessage = window.location.hash.substring(1);
	if (encodedMessage) {
		const decodedMessage = atob(encodedMessage);
		encodedMessageElement.textContent = `Message secret: ${decodedMessage}`;
		messageForm.style.display = "flex";
		userInputField.style.display = "none";
		encodeButton.style.display = "none";
		shareUrlContainer.style.display = "flex";
		shareUrlField.value = window.location.href;
	} else {
		encodedMessageElement.textContent = "Entrer votre message";
		messageForm.style.display = "block";
		shareUrlContainer.style.display = "none";
	}
}