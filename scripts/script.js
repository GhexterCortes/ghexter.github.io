const defaultStyle = '/styles/default.css';
const titles = ["<3", ":)", ":D", ":P", ":O", ":3", ":*", ":^)", ":v", ":>", ":<", ":|", ":S", ":X", ":B"];

function addEmotions(element, text, emotes = titles) {
    text = text || element.innerHTML;
    text = typeof text === 'string' ? [text] : text;

    element.innerHTML = `${text[Math.floor(Math.random() * text.length)]} ${emotes[Math.floor(Math.random() * emotes.length)]}`;

    setTimeout(() => {
        addEmotions(element, text, emotes);
    }, 4000);
}