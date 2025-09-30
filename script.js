const messages = [
    "You been lookin pretty af lately.",
    "My heart does a little dance every time I see your name pop up on my phone.",
    "Every day I spend with you is a new favorite day. You make everything better.",
    "Thanks for being my girl :)",
    "Can't wait to do life w you",
    "Chicagoooo here we comeeeee !!!"
    "ur a lil shit !!!"
];

function showMessage(index) {
    const messageDisplay = document.getElementById('message-display');
    messageDisplay.textContent = messages[index];
}
