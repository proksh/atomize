const findDropdownDir = direction => {
  switch (direction) {
    case "topright":
      return {
        transformOrigin: "100% 100%",
        bottom: "calc(100%)",
        right: "0"
      };
      break;
    case "topleft":
      return {
        transformOrigin: "0 100%",
        bottom: "calc(100% + 2px)",
        left: "0"
      };
      break;
    case "bottomright":
      return { transformOrigin: "50% 0", top: "calc(100%)", right: "0" };
      break;
    case "righttop":
      return { transformOrigin: "0 0", top: "0", left: "calc(100%)" };
      break;
    case "lefttop":
      return { transformOrigin: "0 0", top: "0", right: "calc(100%)" };
      break;
    default:
      return { transformOrigin: "50% 0", top: "calc(100%)", left: "0" };
  }
};

export default findDropdownDir;
