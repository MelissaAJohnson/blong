
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    // Left paddle
    ctx.fillStyle = '#000000';
    ctx.fillRect(25, 200, 10, 75);

    // Right paddle
    ctx.fillStyle = '#000000';
    ctx.fillRect(775, 200, 10, 75);

    // Draw ball
    ctx.beginPath();
    ctx.arc(400, 225, 15, 0, 360, false); // x-axis, y-axis, radius, startAngle, endAngle, antiClockwise)
    ctx.fill();

  }
};
