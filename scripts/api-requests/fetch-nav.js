import { apiUrl } from "../global-variables.js";

async function getApiNav(version = null) {
  if (version == null) {
    version = "";
  } else if (typeof version == "number") {
    version = `?v=${version}`;
  }
  try {
    const res = await fetch(`${apiUrl}/nav/${version}`);
    const apiRes = await res.json();
    if (apiRes.message == "Updated") {
      // Checks if the version is up to date
      console.log(apiRes.message);
      return apiRes.message;
    } else if (typeof apiRes.error == "string") {
      // Checks if the database returned an error
      console.log(
        `The mboulton.com server returned an error ${apiRes.errorData}`
      );
      return apiRes.message;
    } else {
      // Returns the data from the database if it is not up to date or if version wasn't declared
      return apiRes.data;
    }
  } catch (error) {
    console.log(
      `There was an error requesting navigation data from mboulton.com${error}`
    );
  }
}
export default getApiNav;
