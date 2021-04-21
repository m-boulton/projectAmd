import specLoader from "./loaders/spec-loader.js";

function modelButtons(e) {
  if (e.target !== e.currentTarget) {
    specLoader(`${e.target.id}`, "item");
  }
}
export default modelButtons;
