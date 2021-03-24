import getApiNav from "../api-requests/fetch-nav.js";
import navChecker from "./nav-checker.js";

async function navLoader() {
  const navigationObject = await navChecker();

  // navBuilder()
}
export default navLoader;
