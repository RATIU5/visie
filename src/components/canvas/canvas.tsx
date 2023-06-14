import { Component } from "solid-js";

type CanvasProps = {
  ref: HTMLCanvasElement | undefined;
};

const Canvas: Component<CanvasProps> = (props) => {
  return <canvas ref={props.ref} class="w-screen h-screen" />;
};

export default Canvas;
