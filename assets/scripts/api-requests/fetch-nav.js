import { apiUrl } from "../global-variables.js";

async function getApiNav(target, version = null) {
  // declaring the item to target from the database
  target = `?target=${target}`;
  // declaring the version number if it is passed in arguments
  if (version == null) {
    version = "";
  } else if (typeof version == "number") {
    version = `&version=${version}`;
  }
  try {
    const url = `${apiUrl}/amd/nav${target}${version}`;
    const res = await fetch(url);
    const apiRes = await res.json();
    return apiRes;
  } catch (error) {
    console.log(
      `There was an error requesting navigation data from mboulton.com${error}`
    );
  }
}
export default getApiNav;
