import getApiNav from "../api-requests/fetch-nav.js";
import localStorageParser from "../localstorage-parser.js";

const navChecker = async (method, key, value) => {
  const versionCheck = await localStorageParser(
    (method = "get"),
    (key = "navObj"),
    value
  );
  if (versionCheck.message == "data") {
    const apiReqVers = await getApiNav(versionCheck.data.version);
    if (apiReqVers.message == "Updated") {
      console.log("localStorage nav data is up to date");
      return versionCheck.data;
    }
    console.log(await localStorageParser("set", "navObj", apiReqVers.data));
    return apiReqVers.data;
  }
  if (versionCheck.message == "empty") {
    const apiReq = await getApiNav();
    console.log(await localStorageParser("set", "navObj", apiReq.data));
    return apiReq.data;
  }
  return console.log(
    "there was an error checking the localstorage against the database"
  );
};
export default navChecker;
