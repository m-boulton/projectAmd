import { apiUrl } from "../global-variables.js";

async function getApiSpec(specId) {
  // const getBody = { ...optionsBody, id: specId };
  // const getOptions = { ...options, body: JSON.stringify(getBody) };
  try {
    const res = await fetch(`${apiUrl}/spec`, getOptions);
    const apiRes = await res.json();
    if (apiRes.body.error) {
      console.log(
        `The mboulton.com server returned an error ${apiRes.body.errorData}`
      );
      return apiRes.body.message;
    } else {
      return apiRes.body;
    }
  } catch (error) {
    console.log(
      `There was an error requesting ${specId} data from mboulton.com${error}`
    );
  }
}
export default getApiSpec;
