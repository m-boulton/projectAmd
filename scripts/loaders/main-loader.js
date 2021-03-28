import navLoader from "./nav-checker.js";
import headerLoader from "./header-loader.js";
import sidenavLoader from "./sidenav-loader.js";
import contentLoader from "./content-loader.js";
import specLoader from "./spec-loader.js";

async function mainLoader() {
  const navigationObject = await navLoader();
  headerLoader(navigationObject);
  sidenavLoader(navigationObject);
  contentLoader();
  specLoader();
}

export default mainLoader;
