import { Component, ErrorBoundary, onMount } from "solid-js";
import runApp from "./core";

const App: Component = () => {
  let canvas: HTMLCanvasElement | undefined;
  onMount(() => {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    runApp(canvas, ctx);
  });

  return (
    <div class="flex flex-col justify-between h-full">
      <div>Top</div>
      <div class="flex justify-stretch h-full">
        <div class="min-w-[300px] bg-neutral-200">Left</div>
        <div class="flex-grow">
          <ErrorBoundary fallback={(err) => err}>
            <canvas ref={canvas} class="w-full h-full" />
            {/* <div>Test</div> */}
          </ErrorBoundary>
        </div>
        <div class="min-w-[200px] bg-neutral-200">Right</div>
      </div>
      <div class="min-h-[300px] bg-neutral-300">Bottom</div>
    </div>
  );
};

export default App;
