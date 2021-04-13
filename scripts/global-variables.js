const apiUrl = "https://api.mboulton.com";
// const apiUrl = "http://localhost:3500/amd";

const currentPage = window.location.search;
const currentPagePath = window.location.pathname.split(";")[0].split("/").pop();
const page = new URLSearchParams(currentPage);

export { apiUrl, currentPage, currentPagePath, page };
