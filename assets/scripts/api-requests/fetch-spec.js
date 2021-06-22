import { apiUrl } from "../global-variables.js";

async function getApiSpec(query, location) {
  try {
    const res = await fetch(
      `${apiUrl}/amd/spec?target=${query}&location=${location}`
    );
    const apiRes = await res.json();
    if (apiRes.message == "Error" || apiRes.message == "Empty") {
      console.log(
        `The mboulton.com server returned an error : ${apiRes.error} : ${query}`
      );
      return apiRes.message;
    } else {
      return apiRes.data;
    }
  } catch (error) {
    console.log(
      `There was an error requesting ${query} data from mboulton.com${error}`
    );
  }
}
export default getApiSpec;
