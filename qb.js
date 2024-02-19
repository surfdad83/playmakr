function drawSquareWithQB() {
    var canvas = document.getElementById("myCanvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        
        // Coordinates and size for the square
        var x = 275;
        var y = 350;
        var sideLength = 50;
        
        // Draw the square
        ctx.beginPath();
        ctx.rect(x, y, sideLength, sideLength);
        ctx.fillStyle = 'lightgrey'; // Optional: Fill color of the square
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'black';
        ctx.stroke();
        
        // Draw the letter C in the center of the square
        ctx.font = '30px Arial'; // Adjust size and font as needed
        ctx.fillStyle = 'black'; // Text color
        // Calculate the position for the text to be roughly centered within the square
        var text = 'QB';
        var textWidth = ctx.measureText(text).width;
        var textX = x + (sideLength / 2) - (textWidth / 2);
        var textY = y + (sideLength / 2) + 10; // Adjust Y position to better center text, depends on font
        ctx.fillText(text, textX, textY);
    }
}