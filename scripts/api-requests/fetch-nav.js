import { apiUrl } from "../global-variables.js";

async function getApiNav(target, version = null) {
  target = `?target=${target}`;
  if (version == null) {
    version = "";
  } else if (typeof version == "number") {
    version = `&version=${version}`;
  }
  try {
    const res = await fetch(`${apiUrl}/nav/${target}${version}`);
    const apiRes = await res.json();
    return apiRes;
  } catch (error) {
    console.log(
      `There was an error requesting navigation data from mboulton.com${error}`
    );
  }
}
export default getApiNav;
