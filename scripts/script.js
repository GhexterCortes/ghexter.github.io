const defaultStyle = '/styles/default.css';
const titles = ["<3", ":)", ":D", ":P", ":O", ":3", ":*", ":^)", ":v", ":>", ":<", ":|", ":S", ":X", ":B"];

function addEmotions(element, text) {
    text = text || element.innerHTML;

    element.innerHTML = `${text} ${titles[Math.floor(Math.random() * titles.length)]}`;

    setTimeout(() => {
        addEmotions(element, text);
    }, 4000);
}