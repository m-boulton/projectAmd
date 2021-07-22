import { apiUrl } from "../global-variables.js";

async function getApiContent(product) {
  try {
    const res = await fetch(`${apiUrl}/amd/content?p=${product}`);
    const apiRes = await res.json();
    return apiRes;
    // FIXME
    // if (apiRes.message == "DATA") {
    //   return apiRes.data;
    // }
    // if (apiRes.message == "ERROR") {
    //   console.log(
    //     `there was an error from getting data from the server : ${apiRes.errorData}`
    //   );
    //   return apiRes.errorData;
    // }
  } catch (error) {
    console.log(
      `There was an error requesting ${product} data from mboulton.com${error}`
    );
  }
}
export default getApiContent;
