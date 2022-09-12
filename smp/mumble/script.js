function httpGet(theUrl) {
    console.log("Function Started!")
    var xmlHttp = new XMLHttpRequest();
    console.log("Var Created!")
    xmlHttp.open( "GET", theUrl, false );
    console.log("Opened URL!")
    xmlHttp.send( null );
    console.log("Sent Request!")
    return xmlHttp.responseText;
}

function makeid(length) {
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

var gistUrl = "https://gist.githubusercontent.com/JCionx/0cd5c64370d6ea46bacf16fa784ad6a4/raw/mumbleLink.txt?cachebust=";
var gistUrlCached = gistUrl.concat(makeid(14).toString());
var mumbleLink = httpGet(gistUrlCached);

if (mumbleLink.length < 2) {
    document.getElementById("button").style.display = "none";
    document.getElementById("button2").style.display = "block";
}

function openMumble() {
    window.location.href = mumbleLink;
    document.getElementById("button").style.display = "none";
    document.getElementById("arrow").style.display = "block";
}

function reloadPage() {
    location.reload();
}

function mouseMoved(e) {
    if (document.getElementById("arrow").style.display === "block") {
        document.getElementById("button").style.display = "block";
        document.getElementById("arrow").style.display = "none";
    }
    console.log(e.clientX); 
}