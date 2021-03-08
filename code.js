
$(document).ready(function() {


    let NUM_BONES = 5;
    let NUM_BONESInitial = 0;

    while(NUM_BONESInitial  < NUM_BONES)
    {
        // begin creating a row of 5 squares
        let numSquaresNeeded = 5;
        let numSquaresCreated = 0;

        while (numSquaresCreated < numSquaresNeeded) {
            createSquare();
            numSquaresCreated++;
        }
        // end creating the row

        // insert a break to drop down to new line
        let breakTag = $("<br>");
        $("div#board").append(breakTag);

        // add one to number of rows so far
        NUM_BONESInitial++;
    }

    // while number of surprises successfully hidden < 5

    for (let numSurprisesHidden = 0; numSurprisesHidden < 5; numSurprisesHidden++) {
        // pick a random square
        // pick a random number between 0 and 24
        let randomNumber = Math.floor(Math.random() * 25);

        let randomSquare = $("span.square").eq(randomNumber);

        // if the square does not already have a surprise
        if (!randomSquare.hasClass("bone")) {

            // hide a surprise

            randomSquare.addClass("bone");

        }
        // add to number of surprises hidden
        randomSquare++;

    }
});

function playerGuess() {
     // find what span was clicked exactly
    let clickedSpan = $(this);
    let isSurprise = clickedSpan.hasClass("bone");
    let NUM_BONE = 5;
    let remaining = 0;
    if (isSurprise === true) {
        //alert("You found a bone!");
        clickedSpan.css("background-image", "url('bone.jpg')");
        clickedSpan.css("background-size", "100% 100%");
        clickedSpan.off("click");

        for (let isSurprise = 0; isSurprise <= NUM_BONE; isSurprise++) {

            remaining = NUM_BONE - 1;

            let output = `${remaining}`;

             $("span#bRemaining").text(output);

        }

    } else if (isSurprise === false){
        clickedSpan.css("background-color", "saddlebrown");

    }

    };



function generateRandomBGColor() {
    let red, green, blue, luma;

    do {
        red = Math.floor(Math.random() * 256);
        green = Math.floor(Math.random() * 256);
        blue = Math.floor(Math.random() * 256);

        luma = (0.2126 * red) + (0.7152 * green) + (0.0722 * blue);
    } while (luma < 128);

    let rgbString = `rgb(${red}, ${green}, ${blue})`;
    return rgbString;
}

function createSquare() {
    let board = $("div#board");

    let square = $("<span>");
    square.height(70);
    square.width(70);
    square.addClass("square");
    let backgroundColor = generateRandomBGColor();
    square.html("&nbsp;");

    square.css("background-color", backgroundColor);
    square.css("borderRadius", "10px");
    square.css("border", "1px solid black");

    square.click(playerGuess);

    square.on("click", playerGuess);

    board.append(square);

}
    function dangerMeter() {
    let dangerMeter = $("span#dangerMeter");
    let totalToGuess = 0;
    setInterval(function () {
        totalToGuess++;
        dangerMeter.css("width", totalToGuess + "%");
        dangerMeter.attr("aria-valuenow", totalToGuess);
    }, 500);

    }



