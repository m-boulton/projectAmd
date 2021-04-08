import navLoader from "./nav-loader.js";
import domBuilder from "./dom-builder.js";

async function navInitiator(target) {
  const navObj = await navLoader(target);
  if (navObj.message == "Data") {
    domBuilder(target, navObj.data);
    return console.log(`${target} is updating to localstorage`);
  }
  return console.log(`localstorage-${target} is up to date`);
}

export default navInitiator;
