import formBuilder from "./formBuilder.js";
import formSubmit from "./formSubmit.js";
import formReset from "./formReset.js";

function contactForm(event) {
  if (event.target.id == "contactSubmit") {
    let cover = document.getElementById("contactCover");
    let message = document.getElementById("contactPopupMessage");
    let button = document.getElementById("contactMessageButton");
    //   build the form (object)
    let formData = await formBuilder();
    // renders a message when submitting the form with fetch post
    message.textContent = "Submitting form...";
    button.textContent = "Waiting";
    cover.style.display = "block";

    // Submits the form and waits for response
    const response = await formSubmit(formData);
    if (response.message === "ERROR") {
      button.addEventListener("click", () => {
        cover.style.display = "none";
      });
      message.textContent = `${response.error}`;
      return (button.textContent = "Close");
    }
    // returns out of the function and renders the server response (obj.data)
    button.addEventListener("click", () => {
      formReset();
      cover.style.display = "none";
    });
    message.textContent = `${response.data}`;
    return (button.textContent = "Close");
  }
}
export default contactForm;
