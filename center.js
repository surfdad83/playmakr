function drawCircleWithC() {
    var canvas = document.getElementById("myCanvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        
        // Coordinates and radius for the circle
        var centerX = 300;
        var centerY = 300;
        var radius = 20;
        
        // Draw the circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'orange'; // Optional: Fill color of the circle
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#003300';
        ctx.stroke();
        
        // Draw the letter X inside the circle
        ctx.font = '30px Arial'; // Adjust size and font as needed
        ctx.fillStyle = 'black'; // Text color
        // Calculate the position for the text to be roughly centered
        var textWidth = ctx.measureText('C').width;
        var textX = centerX - textWidth / 2;
        var textY = centerY + 10; // Adjust Y position to center text, depends on font
        ctx.fillText('C', textX, textY);
    }
}