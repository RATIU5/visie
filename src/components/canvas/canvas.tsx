import { Component } from "solid-js";

type CanvasProps = {
  ref: HTMLCanvasElement | undefined;
};

const Canvas: Component<CanvasProps> = (props) => {
  return <canvas ref={props.ref} width="256" height="256" />;
};

export default Canvas;
