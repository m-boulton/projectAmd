import navLoader from "./nav-loader.js";
import navBuilder from "./nav-builder.js";

async function navInitiator(target) {
  const navObj = await navLoader(target);
  if (navObj.message == "Data") {
    navBuilder(target, navObj.data);
    return console.log(`${target} is updating to localstorage`);
  }
  return console.log(`localstorage-${target} is up to date`);
}

export default navInitiator;
