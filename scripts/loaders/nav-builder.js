function iterateObject(obj) {
  let data = "";
  return data;
}

const navBuilder = async (target, objData) => {
  // const insert = objData.insertId;
  console.log(Object.entries(objData));
  // console.log(await iterateObject(objData.content));
  //   document.getElementById(insert).innerHTML = await iterateObject(
  //     objData.content
  //   );
};
export default navBuilder;

// for (let prop in obj) {
//   //   only passes for first object nesting in arrays
//   if (typeof obj[prop] == "object" && typeof obj[prop] == "number") {
//     data = iterateObject(obj[prop]);
//   }
//   //  only passes for objects with tags
//   if (typeof obj[prop] == "object" && typeof obj[prop] != "number") {
//     let attribute = "";
//     let text = "";
//     let key = obj[prop];
//     let test = [];
//     for (let attr in obj[prop]) {
//       //   checks for attributes in the object
//       test.unshift(typeof obj[prop]);
//       if (obj[prop] == "name") {
//         text = obj[prop][attr];
//       } else if (
//         typeof obj[prop][attr] == "string" ||
//         obj[prop][attr] == "boolean"
//       ) {
//         let value = obj[prop][attr];
//         attribute = attribute.concat(`${key}=${value}`);
//       }
//     }
//     data = data.concat(
//       `<${key} ${attribute}>${text}${iterateObject(obj[prop])}</${key}>`
//     );
//     console.log("this is the test", test);
//   }
//   // only passes for array items
//   if (typeof obj[prop] == "array") {
//     let tag = obj[prop];
//     data = data.concat(`<${tag}>${iterateObject(obj[prop])}</${tag}>`);
//   }
