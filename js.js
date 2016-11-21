window.onload(generateFaces());

function generateFaces() {
    var numberOfFaces = 5;
    var theLeftSide = document.getElementById("leftSide");
    var theRightSide = document.getElementById("rightSide");
    var theBody = document.getElementsByTagName("body")[0];

while(theLeftSide.firstChild){
    theLeftSide.removeChild(theLeftSide.firstChild)
}
while (theRightSide.firstChild) {
    theRightSide.removeChild(theRightSide.firstChild)
}



for (var i = 0; i < numberOfFaces; ++ i) {
    var img = document.createElement("img");
    img.src = "Doge.png";


    img.style.top = Math.floor(Math.random()* 400) + "px";
    img.style.left = Math.floor(Math.random()* 400) + "px";
    theLeftSide.appendChild(img);



}
    var leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);

    theLeftSide.lastChild.onclick=
        function nextLevel(event){
            event.stopPropagation();
            numberOfFaces += 5;
            generateFaces();

}

    }

    theBody.onclick = function gameOver() {
        alert("Game Over!");
        theBody.onclick = null;
        theLeftSide.lastChild.onclick = null;
    };






