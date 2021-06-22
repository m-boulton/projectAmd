function localStorageParser(method, key, value) {
  // Saves data to local storage
  if (method == "set") {
    window.localStorage.setItem(key, JSON.stringify(value));
    return {
      // this just gets returned to console log later
      message: "stored",
      stored: key,
      location: `LocalStorage-${key}`,
      version: value.version,
    };
  }

  // Gets data from the local storage
  if (method == "get") {
    // checking if item exists
    if (window.localStorage.getItem(key) != null) {
      // getting and returning the item
      const data = window.localStorage.getItem(key);
      const item = JSON.parse(data);
      return { message: "data", data: item };
    }
    return { message: "empty" };
  }
  return "Error, storage method is invalid or undeclared";
}
export default localStorageParser;
