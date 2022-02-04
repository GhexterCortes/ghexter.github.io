const defaultStyle = '/styles/default.css';
const titles = ["<3", ":)", ":D", ":P", ":O", ":3", ":*", ":^)", ":v", ":>", ":<", ":|", ":S", ":X", ":B"];

function setTitle(element) {
    element.innerHTML = `Ghexter Cortes ${titles[Math.floor(Math.random() * titles.length)]}`;

    setTimeout(() => {
        setTitle(element);
    }, 4000);
}