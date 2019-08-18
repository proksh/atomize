const currentDevice = () => {
  const currentWidth = window.innerWidth;
  if (currentWidth < 576) {
    return "xs";
  } else if (currentWidth < 768) {
    return "sm";
  } else if (currentWidth < 992) {
    return "md";
  } else if (currentWidth < 992) {
    return "lg";
  } else if (1200 < currentWidth) {
    return "xl";
  } else {
    return "Couldn't find device";
  }
};

export default currentDevice;
