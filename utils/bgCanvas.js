export default function bgCanvas() {
  const canvas = document.querySelector("#hero-bg-canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const c = canvas.getContext("2d");

  let mousex = undefined;
  let mousey = undefined;

  const circlesCount = 400;
  const speed = 0.5;
  const maxRadius = 2;
  const maxScaledRadius = 50;
  const distanceFromMouse = 100;
  const circleArray = [];

  const colorArray = [
    "#ffffff",
    "#8599a8",
    "#666249",
    "#1b1b136e",
    "#868b5de6",
  ];

  // const colorArray = [
  //   "#ffffff",
  //   "#8599a8",
  //   "#495366",
  //   "#13161b6e",
  //   "#5d6e8be6",
  // ];

  const debounce = (func) => {
    let timer;
    return (event) => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(func, 100, event);
    };
  };

  window.addEventListener(
    "resize",
    debounce(() => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      init();
    })
  );

  const init = () => {
    circleArray.length = 0;
    for (let i = 0; i < circlesCount; i++) {
      const radius = Math.random() * maxRadius + 1;
      const x = Math.random() * (innerWidth - radius * 2) + radius;
      const y = Math.random() * (innerHeight - radius * 2) + radius;
      const dx = (Math.random() - 0.5) * speed;
      const dy = (Math.random() - 0.5) * speed;

      circleArray.push(new Circle(x, y, dx, dy, radius));
    }
  };

  const Circle = function (x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function () {
      c.beginPath();
      c.globalCompositeOperation = "lighter";
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.color;
      c.fill();
    };

    this.update = function () {
      if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
        this.dx = -this.dx;
      }

      if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
        this.dy = -this.dy;
      }

      this.x += this.dx / 2;
      this.y += this.dy / 2;

      if (
        mousex - this.x < distanceFromMouse &&
        mousex - this.x > -distanceFromMouse &&
        mousey - this.y < distanceFromMouse &&
        mousey - this.y > -distanceFromMouse
      ) {
        if (this.radius < maxScaledRadius) this.radius += 1;
      } else {
        if (this.radius > this.minRadius) this.radius -= 1;
      }

      this.draw();
    };
  };

  const animate = () => {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < circleArray.length; i++) {
      circleArray[i].update();
    }
  };

  init();
  animate();

  window.addEventListener("mousemove", (e) => {
    mousex = e.x;
    mousey = e.y;
  });
}
