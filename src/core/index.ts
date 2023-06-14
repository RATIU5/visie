const runApp = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  console.log("Hello World");
  ctx.strokeRect(0, 0, 100, 100);
};

export default runApp;
