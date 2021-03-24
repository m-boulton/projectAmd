function localStorageParser(method, key, value) {
  if (method == "set") {
    window.localStorage.setItem(key, JSON.stringify(value));
    return {
      message: "stored",
      stored: key,
      location: "LocalStorage-navObj",
      version: value.version,
    };
  }
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
