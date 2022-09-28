const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const yt = urlParams.get("yt");
const url = urlParams.get("ur");
const cUrl = urlParams.get("cur");

const isYt = yt == null;
const isUrl = url == null;
const isCUrl = cUrl == null;

if (!isYt) {
    window.location.href = "https://youtu.be/".concat(yt);
}

if (!isUrl) {
    window.location.href = "https://".concat(url);
}

if (!isCUrl) {
    window.location.href = cUrl;
}