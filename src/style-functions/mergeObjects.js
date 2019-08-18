function mergeObjects() {
  var result = {},
    obj;

  for (var i = 0; i < arguments.length; i++) {
    obj = arguments[i];
    for (var key in obj) {
      if (Object.prototype.toString.call(obj[key]) === "[object Object]") {
        if (typeof result[key] === "undefined") {
          result[key] = {};
        }
        result[key] = mergeObjects(result[key], obj[key]);
      } else {
        result[key] = obj[key];
      }
    }
  }
  return result;
}

export default mergeObjects;
