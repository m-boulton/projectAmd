const apiUrl = "https://api.mboulton.com";
// const apiUrl = "http://localhost:3500";

// sets productQuery to the ?p= value in the url
const urlQuery = new URLSearchParams(window.location.search);
const productQuery = urlQuery.get("p");

export { apiUrl, productQuery };
