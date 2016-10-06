 
/**
 * Slider determines the height of the pyramid
 */
function determineHeightAndThenDrawPyramid() {

    var sliderStep = document.getElementById("slider").value;
    
    //console.log(sliderStep)
    
    var heightNum = parseInt(sliderStep);
    
    drawPyramid(heightNum);

}

document.getElementById("slider").addEventListener("change", determineHeightAndThenDrawPyramid);


/**
 * drawPyramid
 */
 function drawPyramid(height) {
  
     // before drawing, clear the old content
    document.getElementById("pyramid").innerHTML = " "

     // for each row....
     for (var row = 0; row < height; row++) {

         // figure out number of bricks and spaces
         var numBricks = row + 2;
         var numSpaces = height - row - 1;

         // build up a string for this row
         var rowStr = "";
         for (var i = 0; i < numSpaces; i++) {
             rowStr += ".";
         }
         for (var i = 0; i < numBricks; i++) {
             rowStr += "#";
         }

        // create a text element with the string of characters
        textElem = document.createTextNode(rowStr);

        // create a <p> element with the text inside
        rowElem = document.createElement("p");
        rowElem.appendChild(textElem);

        // insert the paragraph as a child of the container <div>
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
