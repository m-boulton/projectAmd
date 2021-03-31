import getApiNav from "../api-requests/fetch-nav.js";
import localStorageParser from "../localstorage-parser.js";
import navBuilder from "./nav-builder.js";

const navLoader = async (target) => {
  const versionCheck = await localStorageParser("get", `navObj-${target}`);
  // checking the local storage data version against the database version
  if (versionCheck.message == "data") {
    // Calls the nav builder while the api checks the version
    navBuilder(`navObj-${target}`, versionCheck.data);
    const apiReqVers = await getApiNav(target, versionCheck.data.version);
    if (apiReqVers.message == "Updated") {
      // Version is up to date
      return { message: "Updated", data: versionCheck.data };
    }
    console.log(
      await localStorageParser("set", `navObj-${target}`, apiReqVers.data)
    );
    return { message: "Data", data: apiReqVers.data };
  }
  if (versionCheck.message == "empty") {
    const apiReqEmpty = await getApiNav(target);
    console.log(
      await localStorageParser("set", `navObj-${target}`, apiReqEmpty.data)
    );
    return { message: "Data", data: apiReqEmpty.data };
  }
  return console.log(
    "there was an error checking the localstorage against the database"
  );
};
export default navLoader;
