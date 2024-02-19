function drawCircleWithY() {
    var canvas = document.getElementById("myCanvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        
        // Coordinates and radius for the circle
        var centerX = 425;
        var centerY = 300;
        var radius = 20;
        
        // Draw the circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'lightblue'; // Optional: Fill color of the circle
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#003300';
        ctx.stroke();
        
        // Draw the letter X inside the circle
        ctx.font = '30px Arial'; // Adjust size and font as needed
        ctx.fillStyle = 'black'; // Text color
        // Calculate the position for the text to be roughly centered
        var textWidth = ctx.measureText('Y').width;
        var textX = centerX - textWidth / 2;
        var textY = centerY + 10; // Adjust Y position to center text, depends on font
        ctx.fillText('Y', textX, textY);
    }
}


function drawPostY() {
    var canvas = document.getElementById("myCanvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        var startX = 425; // Starting X coordinate
        var startY = 300; // Starting Y coordinate (mid of canvas height for visibility)
        var midX = 425; // Midpoint X coordinate
        var midY = 200; // Midpoint Y coordinate (same as startY for a straight line initially)
        var endX = 500; // Calculating endX for a 45-degree line considering canvas size
        var endY = 100; // Calculating endY for a 45-degree line
        // Drawing the first half of the line (straight)
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(midX, midY);
        // Drawing the second half of the line (45-degree angle)
        // For a 45-degree angle, the x and y difference should be the same.
        ctx.lineTo(endX, endY);
        ctx.stroke(); // Executes the drawing
        // Calculate angle of the line
        var angle = Math.atan2(endY - midY, endX - midX);
        // Set the length of the arrow head
        var arrowLength = 10;

        // Draw the arrow head
        ctx.beginPath();
        ctx.moveTo(endX, endY);
        ctx.lineTo(endX - arrowLength * Math.cos(angle - Math.PI / 6), endY - arrowLength * Math.sin(angle - Math.PI / 6));
        ctx.lineTo(endX - arrowLength * Math.cos(angle + Math.PI / 6), endY - arrowLength * Math.sin(angle + Math.PI / 6));
        ctx.lineTo(endX, endY);
        ctx.lineTo(endX - arrowLength * Math.cos(angle - Math.PI / 6), endY - arrowLength * Math.sin(angle - Math.PI / 6));
        ctx.fillStyle = 'purple';
        ctx.fill();

        
    }
}

function drawArrowLineY() {
    var canvas = document.getElementById("myCanvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        var x1 = 425, y1 = 300, x2 = 425, y2 = 100; // Example coordinates for the arrow line
        
        
        // Draw the line
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Calculate angle of the line
        var angle = Math.atan2(y2 - y1, x2 - x1);
        
        // Set the length of the arrow head
        var arrowLength = 10;
        
        // Draw the arrow head
        ctx.beginPath();
        ctx.moveTo(x2, y2);
        ctx.lineTo(x2 - arrowLength * Math.cos(angle - Math.PI / 6), y2 - arrowLength * Math.sin(angle - Math.PI / 6));
        ctx.lineTo(x2 - arrowLength * Math.cos(angle + Math.PI / 6), y2 - arrowLength * Math.sin(angle + Math.PI / 6));
        ctx.lineTo(x2, y2);
        ctx.lineTo(x2 - arrowLength * Math.cos(angle - Math.PI / 6), y2 - arrowLength * Math.sin(angle - Math.PI / 6));
        ctx.fillStyle = 'black';
        ctx.fill();
    }
}