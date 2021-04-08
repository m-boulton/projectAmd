import getApiNav from "../api-requests/fetch-nav.js";
import localStorageParser from "../localstorage-parser.js";
import domBuilder from "./dom-builder.js";

const navLoader = async (target) => {
  // Gets the data from local storage
  const versionCheck = await localStorageParser("get", `navObj-${target}`);
  if (versionCheck.message == "data") {
    // Calls the dom builder while the api checks the version
    domBuilder(target, versionCheck.data);
    const apiReqVers = await getApiNav(target, versionCheck.data.version);
    // Returns if data is up to date
    if (apiReqVers.message == "Updated") {
      return { message: "Updated" };
    }
    // Saves data to local storage if it is out of date
    localStorageParser("set", `navObj-${target}`, apiReqVers.data);
    return { message: "Data", data: apiReqVers.data };
  }
  // Gets the data from an api call if local storage is empty
  if (versionCheck.message == "empty") {
    const apiReqEmpty = await getApiNav(target);
    localStorageParser("set", `navObj-${target}`, apiReqEmpty.data);
    return { message: "Data", data: apiReqEmpty.data };
  }
  // console logs any errors
  return console.log(
    "there was an error checking the localstorage against the database"
  );
};
export default navLoader;
