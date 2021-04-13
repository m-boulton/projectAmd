import navLoader from "./nav-loader.js";
import domBuilder from "./dom-builder.js";

async function navInitiator(target) {
  // checking local storage for navigation data
  const navObj = await navLoader(target);
  if (navObj.message == "Data") {
    // re-rendering the dom if the local storage is out of date
    await domBuilder(target, navObj.data);
    return console.log(`${target} is updating to localstorage`);
  }
  if (navObj.message == "")
    return console.log(`localstorage-${target} is up to date`);
}
export default navInitiator;
