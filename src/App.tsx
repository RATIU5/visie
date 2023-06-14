import { Component, ErrorBoundary, onMount } from "solid-js";

const App: Component = () => {
  let canvas: HTMLCanvasElement | undefined;

  onMount(() => {
    if (!canvas) throw new Error("canvas element was unmounted before mount");
    const ctx = canvas.getContext("2d");
  });

  return (
    <div>
      <ErrorBoundary fallback={(err) => err}>
        <canvas ref={canvas}>Canvas is not supported in your browser.</canvas>
      </ErrorBoundary>
    </div>
  );
};

export default App;
