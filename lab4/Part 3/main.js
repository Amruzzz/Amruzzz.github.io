// main.js

// Constants for the canvas and its context
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// Constants for the canvas width and height
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// Ball class
class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }

  // Draw the ball
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  // Update ball position
  update() {
    if ((this.x + this.size) >= width) {
      this.velX = -(this.velX);
    }

    if ((this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }

    if ((this.y + this.size) >= height) {
      this.velY = -(this.velY);
    }

    if ((this.y - this.size) <= 0) {
      this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
  }

  // Detect collisions
  collisionDetect() {
    for (const ball of balls) {
      if (!(this === ball)) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          ball.color = this.color = 'rgb(' + 
            Math.floor(Math.random() * 255) + ',' +
            Math.floor(Math.random() * 255) + ',' +
            Math.floor(Math.random() * 255) + ')';
        }
      }
    }
  }
}

// Array to hold the balls
const balls = [];

// Create 25 random balls
while (balls.length < 25) {
  const size = Math.random() * 20 + 10;
  const ball = new Ball(
    Math.random() * (width - size * 2) + size,
    Math.random() * (height - size * 2) + size,
    Math.random() * 7 - 3.5,
    Math.random() * 7 - 3.5,
    'rgb(' + Math.floor(Math.random() * 255) + ',' +
    Math.floor(Math.random() * 255) + ',' +
    Math.floor(Math.random() * 255) +')',
    size
  );
  balls.push(ball);
}

// Loop function to animate the balls
function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect();
  }

  requestAnimationFrame(loop);
}

// Start the animation loop
loop();
