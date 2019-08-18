const arrayKeyMapToObject = input => {
  var output = {};

  input.forEach(item => {
    openObject(item, output);

    function openObject(objectToOpen, setOpenObjectTo) {
      if (!objectToOpen) {
        return;
      }
      Object.keys(objectToOpen).map(key => {
        if (key === undefined) {
          return;
        } else if (typeof setOpenObjectTo[key] === "object") {
          openObject(objectToOpen[key], setOpenObjectTo[key]);
        } else {
          setOpenObjectTo[key] = objectToOpen[key];
        }
      });
    }
  });

  return output;
};

export default arrayKeyMapToObject;
